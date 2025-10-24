import pandas as pd
from openpyxl import Workbook

# Crear los DataFrames con los datos simulados
df1 = pd.DataFrame({
    "Fuente": ["Eólica (Wind)", "Solar", "Hidroeléctrica (Hydro)", "Biocombustibles (Biofuel)", "Geotérmica (Geothermal)"],
    "Produccion_GWh": [4800, 3500, 6700, 2100, 900]
})

df2 = pd.DataFrame({
    "Tipo de Energía": ["Renovables Totales", "Eólica (Wind)", "Solar", "Hidroeléctrica"],
    "Porcentaje": [60, 20, 15, 25]
})

df3 = pd.DataFrame({
    "Año": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Eólica": [250, 280, 320, 360, 410, 470, 530, 590, 640],
    "Solar": [180, 200, 230, 260, 300, 360, 420, 480, 520],
    "Geotérmica": [60, 65, 68, 70, 74, 78, 80, 82, 85]
})

df4 = pd.DataFrame({
    "Año": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Renovable": [1500, 1650, 1800, 2000, 2250, 2500, 2800, 3100, 3400],
    "Convencional": [4200, 4300, 4400, 4500, 4550, 4400, 4200, 3900, 3500]
})

# Guardar en un archivo Excel con 4 hojas
with pd.ExcelWriter("energias.xlsx", engine="openpyxl") as writer:
    df1.to_excel(writer, index=False, sheet_name="ProduccionPorFuente")
    df2.to_excel(writer, index=False, sheet_name="ParticipacionRenovables")
    df3.to_excel(writer, index=False, sheet_name="CapacidadInstalada")
    df4.to_excel(writer, index=False, sheet_name="ComparacionConsumo")

print("✅ Archivo 'energias.xlsx' creado con éxito.")
