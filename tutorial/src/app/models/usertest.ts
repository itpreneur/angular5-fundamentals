export class UserTest {
    page: number;
    per_page: number;
    "total": number;
    "total_pages": number;
    data: UserI;
}

export class UserI {

    id: number;
    first_name: string;
    last_name: string;
    avatar: string;

    constructor(first_name: string) {
        this.first_name = first_name;
    }
}
