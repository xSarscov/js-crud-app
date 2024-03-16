import { RenderAddButton } from "./presentation/render-add-button/render-add-button";
import { RenderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderModal } from "./presentation/render-modal/render-modal";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./use-cases/save-user";

export const UsersApp = async(element) => {
    element.innerHTML = 'loading...';
    await usersStore.loadNextPage();
    
    element.innerHTML = '';
    RenderTable(element);
    RenderButtons(element);
    RenderAddButton(element);
    RenderModal(element, async(error, userLike) => {
        if (error) {
            console.error(error);
            return;
        }
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        RenderTable();
    });
}