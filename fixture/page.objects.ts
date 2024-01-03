import { TodoPage } from "../pages/todo.page";
import { test as base } from "@playwright/test";

export type PageObjects = {
    todoPage: TodoPage;
};

export const test = base.extend<PageObjects>({
    todoPage: async ({ page }, use) => {
        await use(new TodoPage(page));
    },
});

export { expect, Page, Locator } from "@playwright/test";
