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
                        "system": "http://hl7.org/fhir/sid/icd-10",
                        "code": "D50",
                        "display": "Iron deficiency anemia"
                    }
                },
                {
                    "name": "source",
                    "valueUri": "http://example.com/fhir/ConceptMap/cm-tipos-de-sangre-to-icd10"
                }
            ]
        }
    ]
}