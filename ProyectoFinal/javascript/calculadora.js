
function money(x) {
    return Number(x).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

// Validar si un número está dentro de un rango lógico
function validarRango(valor, min, max, nombre) {
    if (isNaN(valor) || valor < min || valor > max) {
        alert(`⚠ El valor de "${nombre}" debe estar entre ${min} y ${max}.`);
        throw new Error("Dato inválido");
    }
}

function Reset() {
    // Confirmación del usuario
    let confirmReset = confirm("¿Seguro que deseas reiniciar todos los valores? Esta acción borrará los datos ingresados.");
    if (!confirmReset) return; // si cancela, no hace nada

    // Restablecer los valores por defecto
    document.getElementById('Tipo_Consumo').value = 'M';
    document.getElementById('Valor_Consumo').value = "";
    document.getElementById('Potencia_Panel').value = "";
    document.getElementById('Horas_Pico').value = "";
    document.getElementById('Eficiencia_SistemaTotal').value = "";
    document.getElementById('Dias_Autonomia').value = "";
    document.getElementById('dod').value = "";
    document.getElementById('Eficiencia_BateriaInversor').value = "";
    document.getElementById('Costo_Panel').value = "";
    document.getElementById('Costo_Bateria').value = "";
    document.getElementById('Costo_InversorOtros').value = "";
    document.getElementById('Costo_Instalacion').value = "";
    document.getElementById('Costo_OperacionMantenimiento').value = "";
    document.getElementById('Vida_Util').value = "";
    document.getElementById('Numero_Meses').value = "";

    // Limpiar resultados
    document.getElementById('Resultado_consumo').textContent = "-";
    document.getElementById('Resultado_pv').textContent = "-";
    document.getElementById('Resultado_paneles').textContent = "-";
    document.getElementById('Resultado_Bateria').textContent = "-";
    document.getElementById('Resultado_Inversion').textContent = "-";
    document.getElementById('Resultado_KWh').textContent = "-";
    document.getElementById('Comparacion_Pais').innerHTML = "";

    alert("Todos los datos han sido reiniciados correctamente.");
}

function Calcular() {
    try {
        // Consumo
        const T_Consumo = document.getElementById("Tipo_Consumo").value;
        const V_Consumo = parseFloat(document.getElementById("Valor_Consumo").value);
        validarRango(V_Consumo, 1, 100000, "Consumo");
        const kwh_Dia = (T_Consumo === "M") ? V_Consumo / 30 : V_Consumo;
        const kwh_Año = kwh_Dia * 365;

        // Parámetros técnicos
        const Potencia_Panel = parseFloat(document.getElementById("Potencia_Panel").value);
        const Horas_Pico = parseFloat(document.getElementById("Horas_Pico").value);
        const Eficiencia_SistemaTotal = parseFloat(document.getElementById("Eficiencia_SistemaTotal").value);
        const Dias_Autonomia = parseFloat(document.getElementById("Dias_Autonomia").value);
        const dod = parseFloat(document.getElementById("dod").value);
        const Eficiencia_BateriaInversor = parseFloat(document.getElementById("Eficiencia_BateriaInversor").value);

        validarRango(Potencia_Panel, 100, 1000, "Potencia panel");
        validarRango(Horas_Pico, 1, 10, "Horas sol");
        validarRango(Eficiencia_SistemaTotal, 0.5, 1, "Eficiencia sistema");

        // Costos
        const Costo_Panel = parseFloat(document.getElementById("Costo_Panel").value);
        const Costo_Bateria = parseFloat(document.getElementById("Costo_Bateria").value);
        const Costo_InversorOtros = parseFloat(document.getElementById("Costo_InversorOtros").value);
        const Costo_Instalacion = parseFloat(document.getElementById("Costo_Instalacion").value);
        const Costo_OperacionMantenimiento = parseFloat(document.getElementById("Costo_OperacionMantenimiento").value);
        const Vida_Util = parseFloat(document.getElementById("Vida_Util").value);
        const Dolar_COP = parseFloat(document.getElementById("Dolar_COP").value);

        validarRango(Vida_Util, 1, 40, "Vida útil");
        validarRango(Costo_Instalacion, 0, 50, "Instalación (%)");

        // Cálculos
        const pv_w = (kwh_Dia * 1000) / (Horas_Pico * Eficiencia_SistemaTotal);
        const Paneles = Math.ceil(pv_w / Potencia_Panel);
        const Bateria = (kwh_Dia * Dias_Autonomia) / (dod * Eficiencia_BateriaInversor);
        const subtotal = Paneles * Costo_Panel + Bateria * Costo_Bateria + Costo_InversorOtros;
        const total_inv = subtotal * (1 + Costo_Instalacion / 100);
        const total_cop = total_inv * Dolar_COP;
        const Depr_Anual = total_inv / Vida_Util;
        const Anual_costo_total = Depr_Anual + Costo_OperacionMantenimiento;
        const lcoe_usd = Anual_costo_total / kwh_Año;
        const lcoe_cop = lcoe_usd * Dolar_COP;

        // Mostrar resultados
        document.getElementById("Resultado_consumo").textContent = `${kwh_Dia.toFixed(2)} kWh/día`;
        document.getElementById("Resultado_pv").textContent = `${Math.round(pv_w)} W`;
        document.getElementById("Resultado_paneles").textContent = `${Paneles} panel(es)`;
        document.getElementById("Resultado_Bateria").textContent = `${Bateria.toFixed(2)} kWh`;
        document.getElementById("Resultado_Inversion").textContent = `$${money(total_inv)} USD • $${money(total_cop)} COP`;
        document.getElementById("Resultado_KWh").textContent = `$${lcoe_usd.toFixed(3)} USD/kWh • $${lcoe_cop.toFixed(0)} COP/kWh`;

        document.getElementById("Comparacion_Pais").innerHTML =
            `<p class='muted'>💰 Tasa actual: <strong>$${money(Dolar_COP)}</strong> COP/USD</p>`;

    } catch (err) {
        console.warn("Error:", err.message);
    }
}