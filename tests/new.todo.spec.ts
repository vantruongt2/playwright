import { test, expect } from "../fixture/page.objects";

test.describe('New Todo', () => {
    test('should allow me to add todo items', async ({ todoPage }) => {
        await todoPage.goto();
        const todoItem = "buy some cheese";
        await todoPage.addTodo(todoItem);
        await expect(todoPage.todoTitle).toHaveText(todoItem);
    });
});
