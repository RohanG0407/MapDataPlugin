L.ClickableTooltip = L.Tooltip.extend({
    onAdd: function (map) {
        L.Tooltip.prototype.onAdd.call(this, map);

        var el = this.getElement(),
            self = this;

        el.addEventListener('click', function() {
            self.fire("click");
        });
        el.style.pointerEvents = 'auto';
    }
});