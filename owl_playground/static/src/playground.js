/** @odoo-module **/

import { Component, useState,onWillStart,onWillRender,onRendered,onMounted } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Todo } from "./todo/todo";
import {Todolist} from "./todolist/todolist";
import { Card } from "./card/card";

export class Playground extends Component {
    static components = { Counter,Todo,Todolist,Card };
    static template = "owl_playground.playground";

    setup() {
        onMounted(async () => {
            console.log("onMounted");
        });
        onRendered(async () => {
            console.log("onRendered");
        });
        onWillRender(async () => {
            console.log("onWillRender");
        });
        onWillStart(async () => {
            console.log("onWillStart");
        });
    }
}

