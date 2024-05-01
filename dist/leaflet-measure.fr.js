!(function(e) {
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var r = {};
  (t.m = e),
    (t.c = r),
    (t.d = function(e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = '/dist/'),
    t((t.s = 28));
})([
  function(e, t, r) {
    function n(e) {
      return null == e ? (void 0 === e ? l : a) : u && u in Object(e) ? s(e) : i(e);
    }
    var o = r(4),
      s = r(38),
      i = r(39),
      a = '[object Null]',
      l = '[object Undefined]',
      u = o ? o.toStringTag : void 0;
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      return null != e && 'object' == typeof e;
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    }
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    function n(e, t, r) {
      if (((r = r || {}), !h(r))) throw new Error('options is invalid');
      var n = r.bbox,
        o = r.id;
      if (void 0 === e) throw new Error('geometry is required');
      if (t && t.constructor !== Object) throw new Error('properties must be an Object');
      n && d(n), o && m(o);
      var s = { type: 'Feature' };
      return o && (s.id = o), n && (s.bbox = n), (s.properties = t || {}), (s.geometry = e), s;
    }
    function o(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (!Array.isArray(e)) throw new Error('coordinates must be an Array');
      if (e.length < 2) throw new Error('coordinates must be at least 2 numbers long');
      if (!f(e[0]) || !f(e[1])) throw new Error('coordinates must contain numbers');
      return n({ type: 'Point', coordinates: e }, t, r);
    }
    function s(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      for (var o = 0; o < e.length; o++) {
        var s = e[o];
        if (s.length < 4)
          throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        for (var i = 0; i < s[s.length - 1].length; i++) {
          if ((0 === o && 0 === i && !f(s[0][0])) || !f(s[0][1]))
            throw new Error('coordinates must contain numbers');
          if (s[s.length - 1][i] !== s[0][i])
            throw new Error('First and last Position are not equivalent.');
        }
      }
      return n({ type: 'Polygon', coordinates: e }, t, r);
    }
    function i(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (e.length < 2) throw new Error('coordinates must be an array of two or more positions');
      if (!f(e[0][1]) || !f(e[0][1])) throw new Error('coordinates must contain numbers');
      return n({ type: 'LineString', coordinates: e }, t, r);
    }
    function a(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return n({ type: 'MultiLineString', coordinates: e }, t, r);
    }
    function l(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return n({ type: 'MultiPoint', coordinates: e }, t, r);
    }
    function u(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return n({ type: 'MultiPolygon', coordinates: e }, t, r);
    }
    function c(e, t) {
      if (void 0 === e || null === e) throw new Error('radians is required');
      if (t && 'string' != typeof t) throw new Error('units must be a string');
      var r = y[t || 'kilometers'];
      if (!r) throw new Error(t + ' units is invalid');
      return e * r;
    }
    function p(e) {
      if (null === e || void 0 === e) throw new Error('degrees is required');
      return (e % 360) * Math.PI / 180;
    }
    function f(e) {
      return !isNaN(e) && null !== e && !Array.isArray(e);
    }
    function h(e) {
      return !!e && e.constructor === Object;
    }
    function d(e) {
      if (!e) throw new Error('bbox is required');
      if (!Array.isArray(e)) throw new Error('bbox must be an Array');
      if (4 !== e.length && 6 !== e.length)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      e.forEach(function(e) {
        if (!f(e)) throw new Error('bbox must only contain numbers');
      });
    }
    function m(e) {
      if (!e) throw new Error('id is required');
      if (-1 === ['string', 'number'].indexOf(typeof e))
        throw new Error('id must be a number or a string');
    }
    r.d(t, 'b', function() {
      return n;
    }),
      r.d(t, 'f', function() {
        return o;
      }),
      r.d(t, 'e', function() {
        return i;
      }),
      r.d(t, 'g', function() {
        return c;
      }),
      r.d(t, 'a', function() {
        return p;
      }),
      r.d(t, 'c', function() {
        return f;
      }),
      r.d(t, 'd', function() {
        return h;
      });
    var y = {
      meters: 6371008.8,
      metres: 6371008.8,
      millimeters: 6371008800,
      millimetres: 6371008800,
      centimeters: 637100880,
      centimetres: 637100880,
      kilometers: 6371.0088,
      kilometres: 6371.0088,
      miles: 3958.761333810546,
      nauticalmiles: 6371008.8 / 1852,
      inches: 6371008.8 * 39.37,
      yards: 6371008.8 / 1.0936,
      feet: 20902260.511392,
      radians: 1,
      degrees: 6371008.8 / 111325
    };
  },
  function(e, t, r) {
    var n = r(5),
      o = n.Symbol;
    e.exports = o;
  },
  function(e, t, r) {
    var n = r(11),
      o = 'object' == typeof self && self && self.Object === Object && self,
      s = n || o || Function('return this')();
    e.exports = s;
  },
  function(e, t) {
    function r(e, t) {
      return e === t || (e !== e && t !== t);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      return null != e && s(e.length) && !o(e);
    }
    var o = r(10),
      s = r(16);
    e.exports = n;
  },
  function(e, t, r) {
    function n(e, t, r) {
      '__proto__' == t && o
        ? o(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    var o = r(9);
    e.exports = n;
  },
  function(e, t, r) {
    var n = r(35),
      o = (function() {
        try {
          var e = n(Object, 'defineProperty');
          return e({}, '', {}), e;
        } catch (e) {}
      })();
    e.exports = o;
  },
  function(e, t, r) {
    function n(e) {
      if (!s(e)) return !1;
      var t = o(e);
      return t == a || t == l || t == i || t == u;
    }
    var o = r(0),
      s = r(2),
      i = '[object AsyncFunction]',
      a = '[object Function]',
      l = '[object GeneratorFunction]',
      u = '[object Proxy]';
    e.exports = n;
  },
  function(e, t, r) {
    (function(t) {
      var r = 'object' == typeof t && t && t.Object === Object && t;
      e.exports = r;
    }.call(t, r(37)));
  },
  function(e, t, r) {
    function n(e, t) {
      return i(s(e, t, o), e + '');
    }
    var o = r(13),
      s = r(45),
      i = r(46);
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      return e;
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function n(e, t, r) {
      if (!a(r)) return !1;
      var n = typeof t;
      return !!('number' == n ? s(r) && i(t, r.length) : 'string' == n && t in r) && o(r[t], e);
    }
    var o = r(6),
      s = r(7),
      i = r(17),
      a = r(2);
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= n;
    }
    var n = 9007199254740991;
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      var r = typeof e;
      return (
        !!(t = null == t ? n : t) &&
        ('number' == r || ('symbol' != r && o.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    }
    var n = 9007199254740991,
      o = /^(?:0|[1-9]\d*)$/;
    e.exports = r;
  },
  function(e, t, r) {
    function n(e, t) {
      var r = i(e),
        n = !r && s(e),
        c = !r && !n && a(e),
        f = !r && !n && !c && u(e),
        h = r || n || c || f,
        d = h ? o(e.length, String) : [],
        m = d.length;
      for (var y in e)
        (!t && !p.call(e, y)) ||
          (h &&
            ('length' == y ||
              (c && ('offset' == y || 'parent' == y)) ||
              (f && ('buffer' == y || 'byteLength' == y || 'byteOffset' == y)) ||
              l(y, m))) ||
          d.push(y);
      return d;
    }
    var o = r(51),
      s = r(52),
      i = r(19),
      a = r(54),
      l = r(17),
      u = r(56),
      c = Object.prototype,
      p = c.hasOwnProperty;
    e.exports = n;
  },
  function(e, t) {
    var r = Array.isArray;
    e.exports = r;
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function(e, t) {
    function r(e) {
      var t = e && e.constructor;
      return e === (('function' == typeof t && t.prototype) || n);
    }
    var n = Object.prototype;
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      if (!s(e)) return !1;
      var t = o(e);
      return (
        t == l || t == a || ('string' == typeof e.message && 'string' == typeof e.name && !i(e))
      );
    }
    var o = r(0),
      s = r(1),
      i = r(63),
      a = '[object DOMException]',
      l = '[object Error]';
    e.exports = n;
  },
  function(e, t) {
    function r(e, t) {
      return function(r) {
        return e(t(r));
      };
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
      return o;
    }
    e.exports = r;
  },
  function(e, t) {
    var r = /<%=([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      return null == e ? '' : o(e);
    }
    var o = r(75);
    e.exports = n;
  },
  function(e, t, r) {
    'use strict';
    function n(e, t, r) {
      if (null !== e)
        for (
          var o,
            s,
            i,
            a,
            l,
            u,
            c,
            p,
            f = 0,
            h = 0,
            d = e.type,
            m = 'FeatureCollection' === d,
            y = 'Feature' === d,
            b = m ? e.features.length : 1,
            v = 0;
          v < b;
          v++
        ) {
          (c = m ? e.features[v].geometry : y ? e.geometry : e),
            (p = !!c && 'GeometryCollection' === c.type),
            (l = p ? c.geometries.length : 1);
          for (var g = 0; g < l; g++) {
            var _ = 0,
              j = 0;
            if (null !== (a = p ? c.geometries[g] : c)) {
              u = a.coordinates;
              var M = a.type;
              switch (((f = !r || ('Polygon' !== M && 'MultiPolygon' !== M) ? 0 : 1), M)) {
                case null:
                  break;
                case 'Point':
                  if (!1 === t(u, h, v, _, j)) return !1;
                  h++, _++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (o = 0; o < u.length; o++) {
                    if (!1 === t(u[o], h, v, _, j)) return !1;
                    h++, 'MultiPoint' === M && _++;
                  }
                  'LineString' === M && _++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (o = 0; o < u.length; o++) {
                    for (s = 0; s < u[o].length - f; s++) {
                      if (!1 === t(u[o][s], h, v, _, j)) return !1;
                      h++;
                    }
                    'MultiLineString' === M && _++, 'Polygon' === M && j++;
                  }
                  'Polygon' === M && _++;
                  break;
                case 'MultiPolygon':
                  for (o = 0; o < u.length; o++) {
                    for ('MultiPolygon' === M && (j = 0), s = 0; s < u[o].length; s++) {
                      for (i = 0; i < u[o][s].length - f; i++) {
                        if (!1 === t(u[o][s][i], h, v, _, j)) return !1;
                        h++;
                      }
                      j++;
                    }
                    _++;
                  }
                  break;
                case 'GeometryCollection':
                  for (o = 0; o < a.geometries.length; o++)
                    if (!1 === n(a.geometries[o], t, r)) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function o(e, t) {
      var r,
        n,
        o,
        s,
        i,
        a,
        l,
        u,
        c,
        p,
        f = 0,
        h = 'FeatureCollection' === e.type,
        d = 'Feature' === e.type,
        m = h ? e.features.length : 1;
      for (r = 0; r < m; r++) {
        for (
          a = h ? e.features[r].geometry : d ? e.geometry : e,
            u = h ? e.features[r].properties : d ? e.properties : {},
            c = h ? e.features[r].bbox : d ? e.bbox : void 0,
            p = h ? e.features[r].id : d ? e.id : void 0,
            l = !!a && 'GeometryCollection' === a.type,
            i = l ? a.geometries.length : 1,
            o = 0;
          o < i;
          o++
        )
          if (null !== (s = l ? a.geometries[o] : a))
            switch (s.type) {
              case 'Point':
              case 'LineString':
              case 'MultiPoint':
              case 'Polygon':
              case 'MultiLineString':
              case 'MultiPolygon':
                if (!1 === t(s, f, u, c, p)) return !1;
                break;
              case 'GeometryCollection':
                for (n = 0; n < s.geometries.length; n++)
                  if (!1 === t(s.geometries[n], f, u, c, p)) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          else if (!1 === t(null, f, u, c, p)) return !1;
        f++;
      }
    }
    function s(e, t, r) {
      var n = r;
      return (
        o(e, function(e, o, s, i, a) {
          n = 0 === o && void 0 === r ? e : t(n, e, o, s, i, a);
        }),
        n
      );
    }
    function i(e, t) {
      o(e, function(e, r, n, o, s) {
        var i = null === e ? null : e.type;
        switch (i) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            if (!1 === t(Object(u.b)(e, n, { bbox: o, id: s }), r, 0)) return !1;
            return;
        }
        var a;
        switch (i) {
          case 'MultiPoint':
            a = 'Point';
            break;
          case 'MultiLineString':
            a = 'LineString';
            break;
          case 'MultiPolygon':
            a = 'Polygon';
        }
        for (var l = 0; l < e.coordinates.length; l++) {
          var c = e.coordinates[l],
            p = { type: a, coordinates: c };
          if (!1 === t(Object(u.b)(p, n), r, l)) return !1;
        }
      });
    }
    function a(e, t) {
      i(e, function(e, r, o) {
        var s = 0;
        if (e.geometry) {
          var i = e.geometry.type;
          if ('Point' !== i && 'MultiPoint' !== i) {
            var a;
            return (
              !1 !==
                n(e, function(n, i, l, c, p) {
                  if (void 0 === a) return void (a = n);
                  var f = Object(u.e)([a, n], e.properties);
                  if (!1 === t(f, r, o, p, s)) return !1;
                  s++, (a = n);
                }) && void 0
            );
          }
        }
      });
    }
    function l(e, t, r) {
      var n = r,
        o = !1;
      return (
        a(e, function(e, s, i, a, l) {
          (n = !1 === o && void 0 === r ? e : t(n, e, s, i, a, l)), (o = !0);
        }),
        n
      );
    }
    r.d(t, 'a', function() {
      return s;
    }),
      r.d(t, 'b', function() {
        return l;
      });
    var u = r(3);
  },
  function(e, t, r) {
    e.exports = r(29);
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r(30);
    var o = r(31),
      s = n(o),
      i = r(79),
      a = n(i),
      l = r(80),
      u = n(l),
      c = r(85),
      p = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      })(c),
      f = r(86),
      h = n(f),
      d = r(87),
      m = r(88),
      y = { imports: { numberFormat: d.numberFormat }, interpolate: /{{([\s\S]+?)}}/g },
      b = (0, s.default)(m.controlTemplate, y),
      v = (0, s.default)(m.resultsTemplate, y),
      g = (0, s.default)(m.pointPopupTemplate, y),
      _ = (0, s.default)(m.linePopupTemplate, y),
      j = (0, s.default)(m.areaPopupTemplate, y),
      M = {
        measure: 'Mesure',
        measureDistancesAndAreas: 'Mesurer les distances et superficies',
        createNewMeasurement: 'Créer une nouvelle mesure',
        startCreating:
          "Débuter la création d'une nouvelle mesure en ajoutant des points sur la carte",
        finishMeasurement: 'Finir la mesure',
        lastPoint: 'Dernier point',
        area: 'Surface',
        perimeter: 'Périmètre',
        pointLocation: 'Placement du point',
        areaMeasurement: 'Mesure de la surface',
        linearMeasurement: 'Mesure linéaire',
        pathDistance: 'Distance du chemin',
        centerOnArea: 'Centrer sur cette zone',
        centerOnLine: 'Centrer sur cette ligne',
        centerOnLocation: 'Centrer à cet endroit',
        cancel: 'Annuler',
        delete: 'Supprimer',
        acres: 'Acres',
        feet: 'Pieds',
        kilometers: 'Kilomètres',
        hectares: 'Hectares',
        meters: 'Mètres',
        miles: 'Miles',
        sqfeet: 'Pieds carrés',
        sqmeters: 'Mètres carrés',
        sqmiles: 'Miles carrés',
        decPoint: ',',
        thousandsSep: ' ',
        coordinates: 'decimal'
      };
    (L.Control.Measure = L.Control.extend({
      _className: 'leaflet-control-measure',
      options: {
        units: {},
        labels: {},
        position: 'topright',
        primaryLengthUnit: 'feet',
        secondaryLengthUnit: 'miles',
        primaryAreaUnit: 'acres',
        activeColor: '#ABE67E',
        completedColor: '#C8F2BE',
        captureZIndex: 1e4,
        popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }
      },
      initialize: function(e) {
        L.setOptions(this, e),
          (this.options.labels = Object.assign(Object.assign({}, M), this.options.labels));
        var t = this.options,
          r = t.activeColor,
          n = t.completedColor;
        (this._symbols = new h.default({ activeColor: r, completedColor: n })),
          (this.options.units = L.extend({}, a.default, this.options.units));
      },
      onAdd: function(e) {
        return (
          (this._map = e),
          (this._latlngs = []),
          this._initLayout(),
          e.on('click', this._collapse, this),
          (this._layer = L.layerGroup().addTo(e)),
          this._container
        );
      },
      onRemove: function(e) {
        e.off('click', this._collapse, this), e.removeLayer(this._layer);
      },
      _initLayout: function() {
        var e = this._className,
          t = (this._container = L.DomUtil.create('div', e + ' leaflet-bar'));
        (t.innerHTML = b({ model: { className: e }, labels: this.options.labels })),
          t.setAttribute('aria-haspopup', !0),
          L.DomEvent.disableClickPropagation(t),
          L.DomEvent.disableScrollPropagation(t);
        var r = (this.$toggle = (0, c.selectOne)('.js-toggle', t));
        this.$interaction = (0, c.selectOne)('.js-interaction', t);
        var n = (0, c.selectOne)('.js-start', t),
          o = (0, c.selectOne)('.js-cancel', t),
          s = (0, c.selectOne)('.js-finish', t);
        (this.$startPrompt = (0, c.selectOne)('.js-startprompt', t)),
          (this.$measuringPrompt = (0, c.selectOne)('.js-measuringprompt', t)),
          (this.$startHelp = (0, c.selectOne)('.js-starthelp', t)),
          (this.$results = (0, c.selectOne)('.js-results', t)),
          (this.$measureTasks = (0, c.selectOne)('.js-measuretasks', t));
        var i = (0, c.selectOne)('.close-button', t),
          a = (0, c.selectOne)('.close-button-measure', t);
        this._collapse(),
          this._updateMeasureNotStarted(),
          L.Browser.android || L.DomEvent.on(t, 'click', this._expand, this);
        var l = this;
        L.DomEvent.on(i, 'click', function(e) {
          e.stopPropagation(), l._collapse();
        }),
          L.DomEvent.on(a, 'click', function(e) {
            e.stopPropagation(), l._finishMeasure(), l._collapse();
          }),
          L.DomEvent.on(r, 'click', L.DomEvent.stop),
          L.Browser.touch
            ? L.DomEvent.on(r, 'click', this._expand, this)
            : L.DomEvent.on(r, 'focus', this._expand, this),
          L.DomEvent.on(n, 'click', L.DomEvent.stop),
          L.DomEvent.on(n, 'click', this._startMeasure, this),
          L.DomEvent.on(o, 'click', L.DomEvent.stop),
          L.DomEvent.on(o, 'click', this._finishMeasure, this),
          L.DomEvent.on(s, 'click', L.DomEvent.stop),
          L.DomEvent.on(s, 'click', this._handleMeasureDoubleClick, this);
      },
      _expand: function() {
        p.hide(this.$toggle), p.show(this.$interaction);
      },
      _collapse: function() {
        this._locked || (p.hide(this.$interaction), p.show(this.$toggle));
      },
      _updateMeasureNotStarted: function() {
        p.hide(this.$startHelp),
          p.hide(this.$results),
          p.hide(this.$measureTasks),
          p.hide(this.$measuringPrompt),
          p.show(this.$startPrompt);
      },
      _updateMeasureStartedNoPoints: function() {
        p.hide(this.$results),
          p.show(this.$startHelp),
          p.show(this.$measureTasks),
          p.hide(this.$startPrompt),
          p.show(this.$measuringPrompt);
      },
      _updateMeasureStartedWithPoints: function() {
        p.hide(this.$startHelp),
          p.show(this.$results),
          p.show(this.$measureTasks),
          p.hide(this.$startPrompt),
          p.show(this.$measuringPrompt);
      },
      _startMeasure: function() {
        (this._locked = !0),
          (this._measureVertexes = L.featureGroup().addTo(this._layer)),
          (this._captureMarker = L.marker(this._map.getCenter(), {
            clickable: !0,
            zIndexOffset: this.options.captureZIndex,
            opacity: 0,
            autoPanOnFocus: !1,
            iconSize: this._map.getSize().multiplyBy(2)
          }).addTo(this._layer)),
          this._setCaptureMarkerIcon(),
          this._captureMarker
            .on('mouseout', this._handleMapMouseOut, this)
            .on('dblclick', this._handleMeasureDoubleClick, this)
            .on('click', this._handleMeasureClick, this),
          this._map
            .on('mousemove', this._handleMeasureMove, this)
            .on('mouseout', this._handleMapMouseOut, this)
            .on('move', this._centerCaptureMarker, this)
            .on('resize', this._setCaptureMarkerIcon, this),
          L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this),
          this._updateMeasureStartedNoPoints(),
          this._map.fire('measurestart', null, !1);
      },
      _finishMeasure: function() {
        var e = L.extend({}, this._resultsModel, { points: this._latlngs });
        (this._locked = !1),
          L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this),
          this._clearMeasure(),
          this._captureMarker
            .off('mouseout', this._handleMapMouseOut, this)
            .off('dblclick', this._handleMeasureDoubleClick, this)
            .off('click', this._handleMeasureClick, this),
          this._map
            .off('mousemove', this._handleMeasureMove, this)
            .off('mouseout', this._handleMapMouseOut, this)
            .off('move', this._centerCaptureMarker, this)
            .off('resize', this._setCaptureMarkerIcon, this),
          this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker),
          (this._measureVertexes = null),
          this._updateMeasureNotStarted(),
          this._collapse(),
          this._map.fire('measurefinish', e, !1);
      },
      _clearMeasure: function() {
        (this._latlngs = []),
          (this._resultsModel = null),
          this._measureVertexes.clearLayers(),
          this._measureDrag && this._layer.removeLayer(this._measureDrag),
          this._measureArea && this._layer.removeLayer(this._measureArea),
          this._measureBoundary && this._layer.removeLayer(this._measureBoundary),
          (this._measureDrag = null),
          (this._measureArea = null),
          (this._measureBoundary = null);
      },
      _centerCaptureMarker: function() {
        this._captureMarker.setLatLng(this._map.getCenter());
      },
      _setCaptureMarkerIcon: function() {
        this._captureMarker.setIcon(L.divIcon({ iconSize: this._map.getSize().multiplyBy(2) }));
      },
      _getMeasurementDisplayStrings: function(e) {
        return {
          lengthDisplay: this.buildDisplay(
            e.length,
            this.options.primaryLengthUnit,
            this.options.secondaryLengthUnit,
            this.options.decPoint,
            this.options.thousandsSep
          ),
          areaDisplay: this.buildDisplay(
            e.area,
            this.options.primaryAreaUnit,
            this.options.secondaryAreaUnit,
            this.options.decPoint,
            this.options.thousandsSep
          )
        };
      },
      buildDisplay: function(e, t, r, n, o) {
        if (t && this.options.units[t]) {
          var s = this.formatMeasure(e, this.options.units[t], n, o);
          if (r && this.options.units[r]) {
            s = s + ' (' + this.formatMeasure(e, this.options.units[r], n, o) + ')';
          }
          return s;
        }
        return this.formatMeasure(e, null, n, o);
      },
      formatMeasure: function(e, t, r, n) {
        var o = this.options,
          s = {
            acres: o.labels.acres,
            feet: o.labels.feet,
            kilometers: o.labels.kilometers,
            hectares: o.labels.hectares,
            meters: o.labels.meters,
            miles: o.labels.miles,
            sqfeet: o.labels.sqfeet,
            sqmeters: o.labels.sqmeters,
            sqmiles: o.labels.sqmiles
          },
          i = L.extend({ factor: 1, decimals: 0 }, t);
        return [
          (0, d.numberFormat)(
            e * i.factor,
            i.decimals,
            r || o.labels.decPoint,
            n || o.labels.thousandsSep
          ),
          s[i.display] || i.display
        ].join(' ');
      },
      _updateResults: function() {
        var e = (0, u.default)(this._latlngs),
          t = (this._resultsModel = L.extend({}, e, this._getMeasurementDisplayStrings(e), {
            pointCount: this._latlngs.length
          }));
        this.$results.innerHTML = v({ model: t, labels: this.options.labels });
      },
      _handleMeasureMove: function(e) {
        this._measureDrag
          ? this._measureDrag.setLatLng(e.latlng)
          : (this._measureDrag = L.circleMarker(
              e.latlng,
              this._symbols.getSymbol('measureDrag')
            ).addTo(this._layer)),
          this._measureDrag.bringToFront();
      },
      _handleMeasureDoubleClick: function() {
        var e = this._latlngs,
          t = void 0,
          r = void 0;
        if ((this._finishMeasure(), e.length)) {
          e.length > 2 && e.push(e[0]);
          var n = (0, u.default)(e),
            o = 1 === e.length ? n : L.extend({}, n, this._getMeasurementDisplayStrings(n));
          1 === e.length
            ? ((t = L.circleMarker(e[0], this._symbols.getSymbol('resultPoint'))),
              (r = g({ model: o, labels: this.options.labels })))
            : 2 === e.length
              ? ((t = L.polyline(e, this._symbols.getSymbol('resultLine'))),
                (r = _({ model: o, labels: this.options.labels })))
              : ((t = L.polygon(e, this._symbols.getSymbol('resultArea'))),
                (r = j({ model: o, labels: this.options.labels })));
          var s = L.DomUtil.create('div', '');
          s.innerHTML = r;
          var i = (0, c.selectOne)('.js-zoomto', s);
          i &&
            (L.DomEvent.on(i, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              i,
              'click',
              function() {
                t.getBounds
                  ? this._map.fitBounds(t.getBounds(), { padding: [20, 20], maxZoom: 17 })
                  : t.getLatLng && this._map.panTo(t.getLatLng());
              },
              this
            ));
          var a = (0, c.selectOne)('.js-deletemarkup', s);
          a &&
            (L.DomEvent.on(a, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              a,
              'click',
              function() {
                this._layer.removeLayer(t);
              },
              this
            )),
            t.addTo(this._layer),
            t.bindPopup(s, this.options.popupOptions),
            t.getBounds
              ? t.openPopup(t.getBounds().getCenter())
              : t.getLatLng && t.openPopup(t.getLatLng()),
            this._map.fire(
              'measurepopupshown',
              { popupContainer: s, model: o, resultFeature: t },
              !1
            );
        }
      },
      _handleMeasureClick: function(e) {
        var t = this._map.mouseEventToLatLng(e.originalEvent),
          r = this._latlngs[this._latlngs.length - 1],
          n = this._symbols.getSymbol('measureVertex');
        (r && t.equals(r)) ||
          (this._latlngs.push(t),
          this._addMeasureArea(this._latlngs),
          this._addMeasureBoundary(this._latlngs),
          this._measureVertexes.eachLayer(function(e) {
            e.setStyle(n), e._path && e._path.setAttribute('class', n.className);
          }),
          this._addNewVertex(t),
          this._measureBoundary && this._measureBoundary.bringToFront(),
          this._measureVertexes.bringToFront()),
          this._updateResults(),
          this._updateMeasureStartedWithPoints();
      },
      _handleMapMouseOut: function() {
        this._measureDrag &&
          (this._layer.removeLayer(this._measureDrag), (this._measureDrag = null));
      },
      _addNewVertex: function(e) {
        L.circleMarker(e, this._symbols.getSymbol('measureVertexActive')).addTo(
          this._measureVertexes
        );
      },
      _addMeasureArea: function(e) {
        if (e.length < 3)
          return void (
            this._measureArea &&
            (this._layer.removeLayer(this._measureArea), (this._measureArea = null))
          );
        this._measureArea
          ? this._measureArea.setLatLngs(e)
          : (this._measureArea = L.polygon(e, this._symbols.getSymbol('measureArea')).addTo(
              this._layer
            ));
      },
      _addMeasureBoundary: function(e) {
        if (e.length < 2)
          return void (
            this._measureBoundary &&
            (this._layer.removeLayer(this._measureBoundary), (this._measureBoundary = null))
          );
        this._measureBoundary
          ? this._measureBoundary.setLatLngs(e)
          : (this._measureBoundary = L.polyline(
              e,
              this._symbols.getSymbol('measureBoundary')
            ).addTo(this._layer));
      }
    })),
      L.Map.mergeOptions({ measureControl: !1 }),
      L.Map.addInitHook(function() {
        this.options.measureControl && (this.measureControl = new L.Control.Measure().addTo(this));
      }),
      (L.control.measure = function(e) {
        return new L.Control.Measure(e);
      });
  },
  function(e, t) {},
  function(e, t, r) {
    function n(e, t, r) {
      var n = h.imports._.templateSettings || h;
      r && c(e, t, r) && (t = void 0), (e = d(e)), (t = o({}, t, n, a));
      var x,
        O,
        L = o({}, t.imports, n.imports, a),
        P = p(L),
        k = i(L, P),
        C = 0,
        E = t.interpolate || j,
        A = "__p += '",
        S = RegExp(
          (t.escape || j).source +
            '|' +
            E.source +
            '|' +
            (E === f ? _ : j).source +
            '|' +
            (t.evaluate || j).source +
            '|$',
          'g'
        ),
        D = w.call(t, 'sourceURL')
          ? '//# sourceURL=' + (t.sourceURL + '').replace(/\s/g, ' ') + '\n'
          : '';
      e.replace(S, function(t, r, n, o, s, i) {
        return (
          n || (n = o),
          (A += e.slice(C, i).replace(M, l)),
          r && ((x = !0), (A += "' +\n__e(" + r + ") +\n'")),
          s && ((O = !0), (A += "';\n" + s + ";\n__p += '")),
          n && (A += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
          (C = i + t.length),
          t
        );
      }),
        (A += "';\n");
      var T = w.call(t, 'variable') && t.variable;
      if (T) {
        if (g.test(T)) throw new Error(m);
      } else A = 'with (obj) {\n' + A + '\n}\n';
      (A = (O ? A.replace(y, '') : A).replace(b, '$1').replace(v, '$1;')),
        (A =
          'function(' +
          (T || 'obj') +
          ') {\n' +
          (T ? '' : 'obj || (obj = {});\n') +
          "var __t, __p = ''" +
          (x ? ', __e = _.escape' : '') +
          (O
            ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
            : ';\n') +
          A +
          'return __p\n}');
      var $ = s(function() {
        return Function(P, D + 'return ' + A).apply(void 0, k);
      });
      if ((($.source = A), u($))) throw $;
      return $;
    }
    var o = r(32),
      s = r(62),
      i = r(65),
      a = r(66),
      l = r(67),
      u = r(22),
      c = r(15),
      p = r(68),
      f = r(25),
      h = r(71),
      d = r(26),
      m = 'Invalid `variable` option passed into `_.template`',
      y = /\b__p \+= '';/g,
      b = /\b(__p \+=) '' \+/g,
      v = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      g = /[()=,{}\[\]\/\s]/,
      _ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      j = /($^)/,
      M = /['\n\r\u2028\u2029\\]/g,
      x = Object.prototype,
      w = x.hasOwnProperty;
    e.exports = n;
  },
  function(e, t, r) {
    var n = r(33),
      o = r(44),
      s = r(50),
      i = o(function(e, t, r, o) {
        n(t, s(t), e, o);
      });
    e.exports = i;
  },
  function(e, t, r) {
    function n(e, t, r, n) {
      var i = !r;
      r || (r = {});
      for (var a = -1, l = t.length; ++a < l; ) {
        var u = t[a],
          c = n ? n(r[u], e[u], u, r, e) : void 0;
        void 0 === c && (c = e[u]), i ? s(r, u, c) : o(r, u, c);
      }
      return r;
    }
    var o = r(34),
      s = r(8);
    e.exports = n;
  },
  function(e, t, r) {
    function n(e, t, r) {
      var n = e[t];
      (a.call(e, t) && s(n, r) && (void 0 !== r || t in e)) || o(e, t, r);
    }
    var o = r(8),
      s = r(6),
      i = Object.prototype,
      a = i.hasOwnProperty;
    e.exports = n;
  },
  function(e, t, r) {
    function n(e, t) {
      var r = s(e, t);
      return o(r) ? r : void 0;
    }
    var o = r(36),
      s = r(43);
    e.exports = n;
  },
  function(e, t, r) {
    function n(e) {
      return !(!i(e) || s(e)) && (o(e) ? d : u).test(a(e));
    }
    var o = r(10),
      s = r(40),
      i = r(2),
      a = r(42),
      l = /[\\^$.*+?()[\]{}|]/g,
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      p = Object.prototype,
      f = c.toString,
      h = p.hasOwnProperty,
      d = RegExp(
        '^' +
          f
            .call(h)
            .replace(l, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      );
    e.exports = n;
  },
  function(e, t) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (r = window);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      var t = i.call(e, l),
        r = e[l];
      try {
        e[l] = void 0;
        var n = !0;
      } catch (e) {}
      var o = a.call(e);
      return n && (t ? (e[l] = r) : delete e[l]), o;
    }
    var o = r(4),
      s = Object.prototype,
      i = s.hasOwnProperty,
      a = s.toString,
      l = o ? o.toStringTag : void 0;
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      return o.call(e);
    }
    var n = Object.prototype,
      o = n.toString;
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      return !!s && s in e;
    }
    var o = r(41),
      s = (function() {
        var e = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    e.exports = n;
  },
  function(e, t, r) {
    var n = r(5),
      o = n['__core-js_shared__'];
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      if (null != e) {
        try {
          return o.call(e);
        } catch (e) {}
        try {
          return e + '';
        } catch (e) {}
      }
      return '';
    }
    var n = Function.prototype,
      o = n.toString;
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      return null == e ? void 0 : e[t];
    }
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      return o(function(t, r) {
        var n = -1,
          o = r.length,
          i = o > 1 ? r[o - 1] : void 0,
          a = o > 2 ? r[2] : void 0;
        for (
          i = e.length > 3 && 'function' == typeof i ? (o--, i) : void 0,
            a && s(r[0], r[1], a) && ((i = o < 3 ? void 0 : i), (o = 1)),
            t = Object(t);
          ++n < o;

        ) {
          var l = r[n];
          l && e(t, l, n, i);
        }
        return t;
      });
    }
    var o = r(12),
      s = r(15);
    e.exports = n;
  },
  function(e, t, r) {
    function n(e, t, r) {
      return (
        (t = s(void 0 === t ? e.length - 1 : t, 0)),
        function() {
          for (var n = arguments, i = -1, a = s(n.length - t, 0), l = Array(a); ++i < a; )
            l[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(l)), o(e, this, u);
        }
      );
    }
    var o = r(14),
      s = Math.max;
    e.exports = n;
  },
  function(e, t, r) {
    var n = r(47),
      o = r(49),
      s = o(n);
    e.exports = s;
  },
  function(e, t, r) {
    var n = r(48),
      o = r(9),
      s = r(13),
      i = o
        ? function(e, t) {
            return o(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: n(t),
              writable: !0
            });
          }
        : s;
    e.exports = i;
  },
  function(e, t) {
    function r(e) {
      return function() {
        return e;
      };
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e) {
      var t = 0,
        r = 0;
      return function() {
        var i = s(),
          a = o - (i - r);
        if (((r = i), a > 0)) {
          if (++t >= n) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    var n = 800,
      o = 16,
      s = Date.now;
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      return i(e) ? o(e, !0) : s(e);
    }
    var o = r(18),
      s = r(60),
      i = r(7);
    e.exports = n;
  },
  function(e, t) {
    function r(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var n = r(53),
      o = r(1),
      s = Object.prototype,
      i = s.hasOwnProperty,
      a = s.propertyIsEnumerable,
      l = n(
        (function() {
          return arguments;
        })()
      )
        ? n
        : function(e) {
            return o(e) && i.call(e, 'callee') && !a.call(e, 'callee');
          };
    e.exports = l;
  },
  function(e, t, r) {
    function n(e) {
      return s(e) && o(e) == i;
    }
    var o = r(0),
      s = r(1),
      i = '[object Arguments]';
    e.exports = n;
  },
  function(e, t, r) {
    (function(e) {
      var n = r(5),
        o = r(55),
        s = 'object' == typeof t && t && !t.nodeType && t,
        i = s && 'object' == typeof e && e && !e.nodeType && e,
        a = i && i.exports === s,
        l = a ? n.Buffer : void 0,
        u = l ? l.isBuffer : void 0,
        c = u || o;
      e.exports = c;
    }.call(t, r(20)(e)));
  },
  function(e, t) {
    function r() {
      return !1;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var n = r(57),
      o = r(58),
      s = r(59),
      i = s && s.isTypedArray,
      a = i ? o(i) : n;
    e.exports = a;
  },
  function(e, t, r) {
    function n(e) {
      return i(e) && s(e.length) && !!a[o(e)];
    }
    var o = r(0),
      s = r(16),
      i = r(1),
      a = {};
    (a['[object Float32Array]'] = a['[object Float64Array]'] = a['[object Int8Array]'] = a[
      '[object Int16Array]'
    ] = a['[object Int32Array]'] = a['[object Uint8Array]'] = a['[object Uint8ClampedArray]'] = a[
      '[object Uint16Array]'
    ] = a['[object Uint32Array]'] = !0),
      (a['[object Arguments]'] = a['[object Array]'] = a['[object ArrayBuffer]'] = a[
        '[object Boolean]'
      ] = a['[object DataView]'] = a['[object Date]'] = a['[object Error]'] = a[
        '[object Function]'
      ] = a['[object Map]'] = a['[object Number]'] = a['[object Object]'] = a[
        '[object RegExp]'
      ] = a['[object Set]'] = a['[object String]'] = a['[object WeakMap]'] = !1),
      (e.exports = n);
  },
  function(e, t) {
    function r(e) {
      return function(t) {
        return e(t);
      };
    }
    e.exports = r;
  },
  function(e, t, r) {
    (function(e) {
      var n = r(11),
        o = 'object' == typeof t && t && !t.nodeType && t,
        s = o && 'object' == typeof e && e && !e.nodeType && e,
        i = s && s.exports === o,
        a = i && n.process,
        l = (function() {
          try {
            var e = s && s.require && s.require('util').types;
            return e || (a && a.binding && a.binding('util'));
          } catch (e) {}
        })();
      e.exports = l;
    }.call(t, r(20)(e)));
  },
  function(e, t, r) {
    function n(e) {
      if (!o(e)) return i(e);
      var t = s(e),
        r = [];
      for (var n in e) ('constructor' != n || (!t && l.call(e, n))) && r.push(n);
      return r;
    }
    var o = r(2),
      s = r(21),
      i = r(61),
      a = Object.prototype,
      l = a.hasOwnProperty;
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      var t = [];
      if (null != e) for (var r in Object(e)) t.push(r);
      return t;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var n = r(14),
      o = r(12),
      s = r(22),
      i = o(function(e, t) {
        try {
          return n(e, void 0, t);
        } catch (e) {
          return s(e) ? e : new Error(e);
        }
      });
    e.exports = i;
  },
  function(e, t, r) {
    function n(e) {
      if (!i(e) || o(e) != a) return !1;
      var t = s(e);
      if (null === t) return !0;
      var r = p.call(t, 'constructor') && t.constructor;
      return 'function' == typeof r && r instanceof r && c.call(r) == f;
    }
    var o = r(0),
      s = r(64),
      i = r(1),
      a = '[object Object]',
      l = Function.prototype,
      u = Object.prototype,
      c = l.toString,
      p = u.hasOwnProperty,
      f = c.call(Object);
    e.exports = n;
  },
  function(e, t, r) {
    var n = r(23),
      o = n(Object.getPrototypeOf, Object);
    e.exports = o;
  },
  function(e, t, r) {
    function n(e, t) {
      return o(t, function(t) {
        return e[t];
      });
    }
    var o = r(24);
    e.exports = n;
  },
  function(e, t, r) {
    function n(e, t, r, n) {
      return void 0 === e || (o(e, s[r]) && !i.call(n, r)) ? t : e;
    }
    var o = r(6),
      s = Object.prototype,
      i = s.hasOwnProperty;
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      return '\\' + n[e];
    }
    var n = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' };
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      return i(e) ? o(e) : s(e);
    }
    var o = r(18),
      s = r(69),
      i = r(7);
    e.exports = n;
  },
  function(e, t, r) {
    function n(e) {
      if (!o(e)) return s(e);
      var t = [];
      for (var r in Object(e)) a.call(e, r) && 'constructor' != r && t.push(r);
      return t;
    }
    var o = r(21),
      s = r(70),
      i = Object.prototype,
      a = i.hasOwnProperty;
    e.exports = n;
  },
  function(e, t, r) {
    var n = r(23),
      o = n(Object.keys, Object);
    e.exports = o;
  },
  function(e, t, r) {
    var n = r(72),
      o = r(77),
      s = r(78),
      i = r(25),
      a = { escape: o, evaluate: s, interpolate: i, variable: '', imports: { _: { escape: n } } };
    e.exports = a;
  },
  function(e, t, r) {
    function n(e) {
      return (e = s(e)), e && a.test(e) ? e.replace(i, o) : e;
    }
    var o = r(73),
      s = r(26),
      i = /[&<>"']/g,
      a = RegExp(i.source);
    e.exports = n;
  },
  function(e, t, r) {
    var n = r(74),
      o = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      s = n(o);
    e.exports = s;
  },
  function(e, t) {
    function r(e) {
      return function(t) {
        return null == e ? void 0 : e[t];
      };
    }
    e.exports = r;
  },
  function(e, t, r) {
    function n(e) {
      if ('string' == typeof e) return e;
      if (i(e)) return s(e, n) + '';
      if (a(e)) return c ? c.call(e) : '';
      var t = e + '';
      return '0' == t && 1 / e == -l ? '-0' : t;
    }
    var o = r(4),
      s = r(24),
      i = r(19),
      a = r(76),
      l = 1 / 0,
      u = o ? o.prototype : void 0,
      c = u ? u.toString : void 0;
    e.exports = n;
  },
  function(e, t, r) {
    function n(e) {
      return 'symbol' == typeof e || (s(e) && o(e) == i);
    }
    var o = r(0),
      s = r(1),
      i = '[object Symbol]';
    e.exports = n;
  },
  function(e, t) {
    var r = /<%-([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t) {
    var r = /<%([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        acres: { factor: 24711e-8, display: 'acres', decimals: 2 },
        feet: { factor: 3.2808, display: 'feet', decimals: 2 },
        kilometers: { factor: 0.001, display: 'kilometers', decimals: 2 },
        hectares: { factor: 1e-4, display: 'hectares', decimals: 2 },
        meters: { factor: 1, display: 'meters', decimals: 2 },
        miles: { factor: 3.2808 / 5280, display: 'miles', decimals: 2 },
        sqfeet: { factor: 10.7639, display: 'sqfeet', decimals: 2 },
        sqmeters: { factor: 1, display: 'sqmeters', decimals: 2 },
        sqmiles: { factor: 3.86102e-7, display: 'sqmiles', decimals: 2 }
      });
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return e < 10 ? '0' + e.toString() : e.toString();
    }
    function s(e, t, r) {
      var n = Math.abs(e),
        s = Math.floor(n),
        i = Math.floor(60 * (n - s)),
        a = Math.round(3600 * (n - s - i / 60) * 100) / 100,
        l = n === e ? t : r;
      return o(s) + '&deg; ' + o(i) + "' " + o(a) + '" ' + l;
    }
    function i(e) {
      var t = e[e.length - 1],
        r = e.map(function(e) {
          return [e.lat, e.lng];
        }),
        n = L.polyline(r),
        o = L.polygon(r),
        i = 1e3 * (0, l.default)(n.toGeoJSON(), { units: 'kilometers' }),
        a = (0, c.default)(o.toGeoJSON());
      return {
        lastCoord: {
          dd: { x: t.lng, y: t.lat },
          dms: { x: s(t.lng, 'E', 'W'), y: s(t.lat, 'N', 'S') }
        },
        length: i,
        area: a
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = i);
    var a = r(81),
      l = n(a),
      u = r(84),
      c = n(u);
  },
  function(e, t, r) {
    'use strict';
    function n(e, t) {
      if (((t = t || {}), !Object(i.d)(t))) throw new Error('options is invalid');
      if (!e) throw new Error('geojson is required');
      return Object(s.b)(
        e,
        function(e, r) {
          var n = r.geometry.coordinates;
          return e + Object(o.a)(n[0], n[1], t);
        },
        0
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = r(82),
      s = r(27),
      i = r(3);
    t.default = n;
  },
  function(e, t, r) {
    'use strict';
    function n(e, t, r) {
      if (((r = r || {}), !Object(s.d)(r))) throw new Error('options is invalid');
      var n = r.units,
        i = Object(o.a)(e),
        a = Object(o.a)(t),
        l = Object(s.a)(a[1] - i[1]),
        u = Object(s.a)(a[0] - i[0]),
        c = Object(s.a)(i[1]),
        p = Object(s.a)(a[1]),
        f = Math.pow(Math.sin(l / 2), 2) + Math.pow(Math.sin(u / 2), 2) * Math.cos(c) * Math.cos(p);
      return Object(s.g)(2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)), n);
    }
    var o = r(83),
      s = r(3);
    t.a = n;
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      if (!e) throw new Error('coord is required');
      if ('Feature' === e.type && null !== e.geometry && 'Point' === e.geometry.type)
        return e.geometry.coordinates;
      if ('Point' === e.type) return e.coordinates;
      if (Array.isArray(e) && e.length >= 2 && void 0 === e[0].length && void 0 === e[1].length)
        return e;
      throw new Error('coord must be GeoJSON Point or an Array of numbers');
    }
    r.d(t, 'a', function() {
      return n;
    });
    r(3);
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return Object(l.a)(
        e,
        function(e, t) {
          return e + o(t);
        },
        0
      );
    }
    function o(e) {
      var t,
        r = 0;
      switch (e.type) {
        case 'Polygon':
          return s(e.coordinates);
        case 'MultiPolygon':
          for (t = 0; t < e.coordinates.length; t++) r += s(e.coordinates[t]);
          return r;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
          return 0;
        case 'GeometryCollection':
          for (t = 0; t < e.geometries.length; t++) r += o(e.geometries[t]);
          return r;
      }
    }
    function s(e) {
      var t = 0;
      if (e && e.length > 0) {
        t += Math.abs(i(e[0]));
        for (var r = 1; r < e.length; r++) t -= Math.abs(i(e[r]));
      }
      return t;
    }
    function i(e) {
      var t,
        r,
        n,
        o,
        s,
        i,
        l,
        c = 0,
        p = e.length;
      if (p > 2) {
        for (l = 0; l < p; l++)
          l === p - 2
            ? ((o = p - 2), (s = p - 1), (i = 0))
            : l === p - 1 ? ((o = p - 1), (s = 0), (i = 1)) : ((o = l), (s = l + 1), (i = l + 2)),
            (t = e[o]),
            (r = e[s]),
            (n = e[i]),
            (c += (a(n[0]) - a(t[0])) * Math.sin(a(r[1])));
        c = c * u * u / 2;
      }
      return c;
    }
    function a(e) {
      return e * Math.PI / 180;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = r(27),
      u = 6378137;
    t.default = n;
  },
  function(e, t, r) {
    'use strict';
    function n(e, t) {
      return t || (t = document), t.querySelector(e);
    }
    function o(e, t) {
      return t || (t = document), Array.prototype.slice.call(t.querySelectorAll(e));
    }
    function s(e) {
      if (e) return e.setAttribute('style', 'display:none;'), e;
    }
    function i(e) {
      if (e) return e.removeAttribute('style'), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.selectOne = n),
      (t.selectAll = o),
      (t.hide = s),
      (t.show = i);
  },
  function(e, t, r) {
    'use strict';
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      s = { activeColor: '#ABE67E', completedColor: '#C8F2BE' },
      i = (function() {
        function e(t) {
          n(this, e), (this._options = L.extend({}, s, this._options, t));
        }
        return (
          o(e, [
            {
              key: 'getSymbol',
              value: function(e) {
                return {
                  measureDrag: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.7,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.5,
                    className: 'layer-measuredrag'
                  },
                  measureArea: {
                    clickable: !1,
                    stroke: !1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.2,
                    className: 'layer-measurearea'
                  },
                  measureBoundary: {
                    clickable: !1,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measureboundary'
                  },
                  measureVertex: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.7,
                    className: 'layer-measurevertex'
                  },
                  measureVertexActive: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 1,
                    className: 'layer-measurevertex active'
                  },
                  resultArea: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 0.9,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.2,
                    className: 'layer-measure-resultarea'
                  },
                  resultLine: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 3,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measure-resultline'
                  },
                  resultPoint: {
                    clickable: !0,
                    radius: 4,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.7,
                    className: 'layer-measure-resultpoint'
                  }
                }[e];
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.',
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ',',
        o = e < 0 ? '-' : '',
        s = Math.abs(+e || 0),
        i = parseInt(s.toFixed(t), 10) + '',
        a = i.length > 3 ? i.length % 3 : 0;
      return [
        o,
        a ? i.substr(0, a) + n : '',
        i.substr(a).replace(/(\d{3})(?=\d)/g, '$1' + n),
        t
          ? '' +
            r +
            Math.abs(s - i)
              .toFixed(t)
              .slice(2)
          : ''
      ].join('');
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.numberFormat = n);
  },
  function(e, t, r) {
    'use strict';
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = r(89);
    Object.defineProperty(t, 'controlTemplate', {
      enumerable: !0,
      get: function() {
        return n(o).default;
      }
    });
    var s = r(90);
    Object.defineProperty(t, 'resultsTemplate', {
      enumerable: !0,
      get: function() {
        return n(s).default;
      }
    });
    var i = r(91);
    Object.defineProperty(t, 'pointPopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(i).default;
      }
    });
    var a = r(92);
    Object.defineProperty(t, 'linePopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(a).default;
      }
    });
    var l = r(93);
    Object.defineProperty(t, 'areaPopupTemplate', {
      enumerable: !0,
      get: function() {
        return n(l).default;
      }
    });
  },
  function(e, t) {
    e.exports =
      '<a class="{{ model.className }}-toggle js-toggle" href=# title="{{ labels.measureDistancesAndAreas }}">{{ labels.measure }}</a> <div class="{{ model.className }}-interaction js-interaction"> <div class="js-startprompt startprompt"> <h3><span class="{{ model.className }}-close-button close-button"></span> {{ labels.measureDistancesAndAreas }}</h3> <ul class=tasks> <a href=# class="js-start start">{{ labels.createNewMeasurement }}</a> </ul> </div> <div class=js-measuringprompt> <h3><span class="{{ model.className }}-close-button close-button-measure"></span> {{ labels.measureDistancesAndAreas }}</h3> <p class=js-starthelp>{{ labels.startCreating }}</p> <div class="js-results results"></div> <ul class="js-measuretasks tasks"> <li><a href=# class="js-cancel cancel">{{ labels.cancel }}</a></li> <li><a href=# class="js-finish finish">{{ labels.finishMeasurement }}</a></li> </ul> </div> </div> ';
  },
  function(e, t) {
    e.exports =
      "<div class=group> <p class=lastpoint><span class=heading>{{ labels.lastPoint }}</span> <% if ( labels.coordinates.indexOf('degree') > 0) { %> {{ model.lastCoord.dms.y }} <span class=coorddivider>,</span> {{ model.lastCoord.dms.x }} <% } else { %> {{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>,</span> {{ numberFormat(model.lastCoord.dd.x, 6) }} <% } %> </p> </div> <% if (model.pointCount > 1) { %> <div class=group> <p><span class=heading>{{ labels.pathDistance }}</span> {{ model.lengthDisplay }}</p> </div> <% } %> <% if (model.pointCount > 2) { %> <div class=group> <p><span class=heading>{{ labels.area }}</span> {{ model.areaDisplay }}</p> </div> <% } %> ";
  },
  function(e, t) {
    e.exports =
      '<h3>{{ labels.pointLocation }}</h3> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">{{ labels.centerOnLocation }}</a></li> <li><a href=# class="js-deletemarkup deletemarkup">{{ labels.delete }}</a></li> </ul> ';
  },
  function(e, t) {
    e.exports =
      '<h3>{{ labels.linearMeasurement }}</h3> <p>{{ model.lengthDisplay }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">{{ labels.centerOnLine }}</a></li> <li><a href=# class="js-deletemarkup deletemarkup">{{ labels.delete }}</a></li> </ul> ';
  },
  function(e, t) {
    e.exports =
      '<p><span class=heading>{{ labels.area }}</span> {{ model.areaDisplay }}</p> <p><span class=heading>{{ labels.perimeter }}</span> {{ model.lengthDisplay }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">{{ labels.centerOnArea }}</a></li> <li><a href=# class="js-deletemarkup deletemarkup">{{ labels.delete }}</a></li> </ul> ';
  }
]);
