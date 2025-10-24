import pandas as pd
import plotly.express as px

# 1️⃣ Cargar los datos del archivo Excel
file_path = "energias.xlsx"

df_barras = pd.read_excel(file_path, sheet_name="ProduccionPorFuente")
df_torta = pd.read_excel(file_path, sheet_name="ParticipacionRenovables")
df_lineas = pd.read_excel(file_path, sheet_name="CapacidadInstalada")
df_area = pd.read_excel(file_path, sheet_name="ComparacionConsumo")

# 2️⃣ Gráfico de Barras - Producción por Fuente
fig_barras = px.bar(
    df_barras,
    x="Fuente",
    y="Produccion_GWh",
    color="Fuente",
    title="Producción de Energía Renovable por Fuente (GWh)",
    text="Produccion_GWh"
)
fig_barras.update_traces(textposition="outside")
fig_barras.update_layout(title_x=0.5)
fig_barras.show()

# Exportar a HTML
fig_barras.write_html("grafico_barras.html")

# 3️⃣ Gráfico de Torta - Participación de Energías Renovables
fig_torta = px.pie(
    df_torta,
    names="Tipo de Energía",
    values="Porcentaje",
    title="Participación de Energías Renovables en el Consumo Eléctrico"
)
fig_torta.update_layout(title_x=0.5)
fig_torta.show()

# Exportar a HTML
fig_torta.write_html("grafico_torta.html")

# 4️⃣ Gráfico de Líneas - Tendencia de Capacidad Instalada
fig_lineas = px.line(
    df_lineas,
    x="Año",
    y=["Eólica", "Solar", "Geotérmica"],
    markers=True,
    title="Tendencia en la Capacidad Instalada por Tipo de Energía (GW)"
)
fig_lineas.update_layout(title_x=0.5, yaxis_title="Capacidad (GW)")
fig_lineas.show()

# Exportar a HTML
fig_lineas.write_html("grafico_lineas.html")

# 5️⃣ Gráfico de Área - Comparación Consumo Renovable vs Convencional
fig_area = px.area(
    df_area,
    x="Año",
    y=["Renovable", "Convencional"],
    title="Comparación del Consumo de Energía Renovable vs Convencional"
)
fig_area.update_layout(title_x=0.5, yaxis_title="Consumo (GWh)")
fig_area.show()

# Exportar a HTML
fig_area.write_html("grafico_area.html")

print("✅ Gráficas generadas y exportadas correctamente a archivos HTML.")
