L.Control.MapData = L.Control.extend({
    options: {
        currentCenter: 0,
        currentZoom: 0
    },

    onAdd: function (map) {
        map.on('move', function(e) {
            this._onMapMoved (map)
        });
    },

    onRemove: function (map) {
        map.off('move', this._onMapMoved);
    },

    _onMapMoved: function (map) {
        alert(map.getCenter());
    }
});

L.control.mapData = function (options) {
    return new L.Control.MapData(options);
};