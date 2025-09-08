{
    "resourceType": "ConceptMap",
    "id": "809602",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2025-09-08T22:36:16.494+00:00",
        "source": "#7GpoFnaNKqEOTku2"
    },
    "url": "http://example.com/fhir/ConceptMap/cm-tipos-de-sangre-to-icd10",
    "version": "1.0.0",
    "name": "TiposDeSangreToIcd10",
    "status": "active",
    "group": [
        {
            "source": "http://example.com/fhir/codesystem/tipos-de-sangre",
            "target": "http://hl7.org/fhir/sid/icd-10",
            "element": [
                {
                    "code": "A",
                    "target": [
                        {
                            "code": "D50",
                            "display": "Iron deficiency anemia"
                        }
                    ]
                },
                {
                    "code": "B",
                    "target": [
                        {
                            "code": "D51",
                            "display": "Vitamin B12 deficiency anemia"
                        }
                    ]
                },
                {
                    "code": "AB",
                    "target": [
                        {
                            "code": "D55",
                            "display": "Anemia due to enzyme defects"
                        }
                    ]
                },
                {
                    "code": "O",
                    "target": [
                        {
                            "code": "D64.9",
                            "display": "Anemia, unspecified"
                        }
                    ]
                }
            ]
        }
    ]
}