interface Data<T extends Payload> {
    topic: string;
    payloads: T[];
}

interface Payload {
    text: string;
}

interface InternetPayload extends Payload {
    url: string;
}

interface BookPayload extends Payload {
    page: number;
    line: number;
}

abstract class Resource<T extends Payload> {
    protected name: string;
    protected data: Data<T>[];

    protected constructor(name: string, data: Data<T>[]) {
        this.name = name;
        this.data = data;
    }

    public getPayloadData(topic: string) {
        const payloads = this.data.filter(data => data.topic === topic)[0]?.payloads;
        if (!payloads) {
            return [];
        }
        return [`Resource: ${this.name} Payload: ${payloads.map(item => JSON.stringify(item))}`];
    }
}


class InternetResource extends Resource<InternetPayload> {
    constructor(name: string, data: Data<InternetPayload>[]) {
        super(name, data);
    }
}

class Book extends Resource<BookPayload> {
    constructor(name: string, data: Data<BookPayload>[]) {
        super(name, data);
    }
}

class ResourceApplication {
    private resources: Resource<Payload>[];

    constructor(resources: Resource<Payload>[]) {
        this.resources = resources;
    }

    public printData(topic: string) {
        const findingResources = this.resources.map(resource => resource.getPayloadData(topic)).reduce((acc, val) => acc.concat(val), []);
        const result = `Topic: ${topic} \n` + findingResources.join('\n');
        console.log(result);
    }
}

const site = new InternetResource('fimlov.net',
    [
            {
                topic: 'films',
                payloads:
                    [
                        {
                            text: 'best film',
                            url: 'best_films.net'
                        }
                    ]
            }
    ]);
const book = new Book('just a book',
    [
            {
                topic: 'films',
                payloads:
                    [
                        {
                            page: 1,
                            line: 10,
                            text: 'bla-bla'
                        },
                        {
                            page: 2,
                            line: 40,
                            text: 'blo-blo'
                        }
                    ]
            }
    ]);
const book2 = new Book('book on sky',
    [
            {
                topic: 'sky',
                payloads:
                    [
                        {
                            page: 1,
                            line: 10,
                            text: 'cool sky'
                        }
                    ]
            }
    ]);
const app = new ResourceApplication([book, book2, site]);
app.printData('films');
