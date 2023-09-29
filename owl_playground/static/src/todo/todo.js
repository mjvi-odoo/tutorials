/** @odoo-module **/

import { Component,onWillDestroy,onWillUpdateProps,onWillUnmount } from "@odoo/owl";

export class Todo extends Component {
    static props = {
        id: {type:Number},
        description: {type:String},
        done: {type:Boolean},
        toggleState: { type:Function },
        removeTodo: { type:Function },  
    };
    setup(){
        onWillDestroy(async () => {
            console.log("onWillDestroy");
        });
        onWillUpdateProps(async () => {
            console.log("onWillUpdateProps");
        });
        onWillUnmount(async () => {
            console.log("onWillUnmount");
        });
    }
    


    static template = "owl_playground.todo";
}
// Todo.props = {
//     id: {type:Number},
//     description: {type:String},
//     done: {type:Boolean},
//     toggleState: { type:Function },
//     removeTodo: { type:Function },  
// };

