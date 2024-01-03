import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class TodoPage extends BasePage {
    readonly newTodo: Locator;
    readonly todoTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.newTodo = this.page.getByPlaceholder('What needs to be done?');
        this.todoTitle = this.page.getByTestId("todo-title");
    }


    async goto() {
        await this.page.goto("/todomvc");
    }

    async addTodo(name: string) {
        await this.newTodo.fill(name);
        await this.newTodo.press('Enter');
    }
}