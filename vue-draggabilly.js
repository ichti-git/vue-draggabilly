import Draggabilly from 'draggabilly';

exports.install = function (Vue, options) {
    Vue.directive('draggabilly', {
        bind: function (elem, binding, vnode, oldVnode) {
            var options = binding.value || {};
            var draggie = new Draggabilly(elem, options);
            var directives = vnode.data.directives;
            for (var i in directives) {
                var dir = directives[i];
                if (dir.name === "draggabilly-on") {
                    draggie.on(dir.arg, dir.value);
                }
                else if (dir.name === "draggabilly-once") {
                    draggie.on(dir.arg, dir.value);
                }
            }
        },
        unbind: function (elem, binding, vnode, oldVnode) {
            //TODO
        }
    });
    Vue.directive('draggabilly-on', {
        bind (elem, binding, vnode, oldVnode) {
            return; //No need to do anything
        },
    });
    Vue.directive('draggabilly-once', {
        bind (elem, binding, vnode, oldVnode) {
            return; //No need to do anything
        },
    });
};