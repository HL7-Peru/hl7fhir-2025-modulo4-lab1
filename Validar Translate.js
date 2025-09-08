https://hapi.fhir.org/baseR5/ConceptMap/$translate?url=http://hl7peru.org/fhir/ConceptMap/LaboratorioElianaSaldivar&code=HB


{
    "resourceType": "Parameters",
    "parameter": [
        {
            "name": "result",
            "valueBoolean": true
        },
        {
            "name": "message",
            "valueString": "Matches found"
        },
        {
            "name": "match",
            "part": [
                {
                    "name": "equivalence",
                    "valueCode": "relatedto"
                },
                {
                    "name": "concept",
                    "valueCoding": {
                        "system": "http://loinc.org",
                        "code": "718-7",
                        "display": "Hemoglobin [Mass/volume] in Blood"
                    }
                },
                {
                    "name": "source",
                    "valueUri": "http://hl7peru.org/fhir/ConceptMap/LaboratorioElianaSaldivar"
                }
            ]
        }
    ]
}