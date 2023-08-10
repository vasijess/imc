

const patients = [
    {
        name: "Pedro",
        age: 23,
        weight: 90,
        height: 185
    },
    {
        name: "João",
        age: 22,
        weight: 100,
        height: 185
    },
    {
        name: "Gustavo",
        age: 21,
        weight: 60,
        height: 185
    },
]

function printPatientIMC(patient) {
    alert(`
    Paciente ${patient.name} possui o IMC de
    ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
    `)
}

for (let patient of patients) {
    printPatientIMC(patient)
}