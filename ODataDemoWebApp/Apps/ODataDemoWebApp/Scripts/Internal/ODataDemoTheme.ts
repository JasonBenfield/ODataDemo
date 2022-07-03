﻿import { ContextualClass } from "@jasonbenfield/sharedwebapp/ContextualClass";
import { PaddingCss } from "@jasonbenfield/sharedwebapp/PaddingCss";
import { TextCss } from "@jasonbenfield/sharedwebapp/TextCss";
import { ButtonCommandView } from "@jasonbenfield/sharedwebapp/Views/Commands";
import { ToolbarView } from "@jasonbenfield/sharedwebapp/Views/ToolbarView";

export class ODataDemoTheme {
    public static readonly instance = new ODataDemoTheme();

    readonly listItem = {
        deleteButton(button: ButtonCommandView) {
            return button
                .configure(b => {
                    b.icon.solidStyle('times');
                    b.icon.addCssFrom(new TextCss().context(ContextualClass.danger).cssClass());
                    b.useOutlineStyle(ContextualClass.secondary);
                    b.setText('');
                    b.setTitle('Delete');
                });
        }
    }

    readonly cardHeader = {
        editButton(button: ButtonCommandView) {
            return button
                .configure(b => {
                    b.icon.solidStyle('edit');
                    b.useOutlineStyle(ContextualClass.primary);
                    b.setText('Edit');
                    b.setTitle('Edit');
                });
        },
        addButton(button: ButtonCommandView) {
            return button
                .configure(b => {
                    b.icon.solidStyle('plus');
                    b.useOutlineStyle(ContextualClass.primary);
                    b.setText('Add');
                    b.setTitle('Add');
                });
        }
    }

    readonly commandToolbar = {
        toolbar(toolbar: ToolbarView) {
            return toolbar
                .configure(t => {
                    t.setBackgroundContext(ContextualClass.secondary);
                    t.setPadding(PaddingCss.xs(3));
                });
        },
        backButton(button: ButtonCommandView) {
            return button
                .configure(b => {
                    b.icon.solidStyle('caret-left');
                    b.setText('Back');
                    b.setTitle('Back');
                    b.useOutlineStyle(ContextualClass.light);
                });
        },
        cancelButton(button: ButtonCommandView) {
            return button
                .configure(b => {
                    b.icon.solidStyle('times');
                    b.setText('Cancel');
                    b.setTitle('Cancel');
                    b.setContext(ContextualClass.danger);
                });
        },
        saveButton(button: ButtonCommandView) {
            return button
                .configure(b => {
                    b.icon.solidStyle('check');
                    b.setText('Save');
                    b.setTitle('Save');
                    b.setContext(ContextualClass.primary);
                });
        }
    };
}