(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+kaM":
    /*!*****************************************************************************!*\
      !*** ./src/app/recieps/recipes-list/recipes-item/recipes-item.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: RecipesItemComponent */

    /***/
    function kaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesItemComponent", function () {
        return RecipesItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var RecipesItemComponent = /*#__PURE__*/function () {
        function RecipesItemComponent() {
          _classCallCheck(this, RecipesItemComponent);
        }

        _createClass(RecipesItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecipesItemComponent;
      }();

      RecipesItemComponent.ɵfac = function RecipesItemComponent_Factory(t) {
        return new (t || RecipesItemComponent)();
      };

      RecipesItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecipesItemComponent,
        selectors: [["app-recipes-item"]],
        inputs: {
          recipe: "recipe",
          index: "index"
        },
        decls: 8,
        vars: 7,
        consts: [["routerLinkActive", "active", 1, "list-group-item", "clearfix", "list-group-item-action", "mt-2", 3, "routerLink"], [1, "d-flex", "w-200", "justify-content-between"], [1, "list-group-item-heading"], [1, "img-responsive", 2, "max-height", "50px", 3, "src", "alt"]],
        template: function RecipesItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.index));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2llcHMvcmVjaXBlcy1saXN0L3JlY2lwZXMtaXRlbS9yZWNpcGVzLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recipes-item',
            templateUrl: './recipes-item.component.html',
            styleUrls: ['./recipes-item.component.css']
          }]
        }], function () {
          return [];
        }, {
          recipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "/6hp":
    /*!*******************************************!*\
      !*** ./src/app/services/roles.Service.ts ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function hp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return RolesService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models */
      "VHTt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RolesService = /*#__PURE__*/function () {
        function RolesService() {
          _classCallCheck(this, RolesService);

          this.roleListChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.startedEditing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.roleList = [];
          var createdAt = new Date().toLocaleString();
          this.roleList.push(new _models__WEBPACK_IMPORTED_MODULE_1__["RolesModel"]('Admin', true, createdAt), new _models__WEBPACK_IMPORTED_MODULE_1__["RolesModel"]('Super Admin', true, createdAt));
        }

        _createClass(RolesService, [{
          key: "getRoleList",
          value: function getRoleList() {
            return this.roleList.slice();
          }
        }, {
          key: "getRole",
          value: function getRole(index) {
            return this.roleList[index];
          }
        }, {
          key: "addRole",
          value: function addRole(role) {
            this.roleList.push(role);
            console.log('addRole -------> ', this.roleList);
            this.roleListChanged.next(this.roleList.slice());
          }
        }, {
          key: "updateRole",
          value: function updateRole(index, newRole) {
            this.roleList[index] = newRole;
            console.log('updateRole -------> ', this.roleList);
            this.roleListChanged.next(this.roleList.slice());
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(index) {
            this.roleList.splice(index, 1);
            console.log('deleteRole -------> ', this.roleList);
            this.roleListChanged.next(this.roleList.slice());
          }
        }]);

        return RolesService;
      }();

      RolesService.ɵfac = function RolesService_Factory(t) {
        return new (t || RolesService)();
      };

      RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: RolesService,
        factory: RolesService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RolesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\projects\GettingDotNetCoreApp\GettingDotNetCoreApp.Angular\ClientApp\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4SaO":
    /*!****************************************************************!*\
      !*** ./src/app/recieps/recipes-list/recipes-list.component.ts ***!
      \****************************************************************/

    /*! exports provided: RecipesListComponent */

    /***/
    function SaO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesListComponent", function () {
        return RecipesListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _recipes_item_recipes_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./recipes-item/recipes-item.component */
      "+kaM");

      function RecipesListComponent_app_recipes_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipes-item", 3);
        }

        if (rf & 2) {
          var recipeEl_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", recipeEl_r1)("index", i_r2);
        }
      }

      var RecipesListComponent = /*#__PURE__*/function () {
        function RecipesListComponent(recipeService, router, route) {
          _classCallCheck(this, RecipesListComponent);

          this.recipeService = recipeService;
          this.router = router;
          this.route = route;
          this.recipes = [];
        }

        _createClass(RecipesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recipes = this.recipeService.getRecipes();
          }
        }]);

        return RecipesListComponent;
      }();

      RecipesListComponent.ɵfac = function RecipesListComponent_Factory(t) {
        return new (t || RecipesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      RecipesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecipesListComponent,
        selectors: [["app-recipes-list"]],
        decls: 3,
        vars: 1,
        consts: [[1, "row"], [1, "col-md-12"], [3, "recipe", "index", 4, "ngFor", "ngForOf"], [3, "recipe", "index"]],
        template: function RecipesListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecipesListComponent_app_recipes_item_2_Template, 1, 2, "app-recipes-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _recipes_item_recipes_item_component__WEBPACK_IMPORTED_MODULE_4__["RecipesItemComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2llcHMvcmVjaXBlcy1saXN0L3JlY2lwZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recipes-list',
            templateUrl: './recipes-list.component.html',
            styleUrls: ['./recipes-list.component.css']
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "EB1e":
    /*!******************************************!*\
      !*** ./src/app/roles/roles.component.ts ***!
      \******************************************/

    /*! exports provided: RolesComponent */

    /***/
    function EB1e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
        return RolesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models */
      "VHTt");
      /* harmony import */


      var _store_actions_roles_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../store/actions/roles.action */
      "uNui");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./roles-list/roles-list.component */
      "XuPC");

      var _c0 = ["f"];

      var RolesComponent = /*#__PURE__*/function () {
        function RolesComponent(store) {
          _classCallCheck(this, RolesComponent);

          this.store = store;
          this.editMode = false;
        }

        _createClass(RolesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription = this.store.select('roleList').subscribe(function (stateData) {
              if (stateData.editedRolesIndex > -1) {
                _this.editMode = true;
                _this.editedItem = stateData.editedRoles;

                _this.rlForm.setValue({
                  name: _this.editedItem.name,
                  status: _this.editedItem.status
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _form$value = form.value,
                name = _form$value.name,
                status = _form$value.status;
            status = status ? true : false;
            var newRole = new _models__WEBPACK_IMPORTED_MODULE_1__["RolesModel"](name, status, new Date().toLocaleString());

            if (this.editMode) {
              this.store.dispatch(new _store_actions_roles_action__WEBPACK_IMPORTED_MODULE_2__["UpdatedRoles"](newRole));
            } else {
              this.store.dispatch(new _store_actions_roles_action__WEBPACK_IMPORTED_MODULE_2__["AddRoles"](newRole));
            }

            this.editMode = false;
            form.reset();
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.rlForm.reset();
            this.editMode = false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return RolesComponent;
      }();

      RolesComponent.ɵfac = function RolesComponent_Factory(t) {
        return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RolesComponent,
        selectors: [["app-roles"]],
        viewQuery: function RolesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rlForm = _t.first);
          }
        },
        decls: 20,
        vars: 3,
        consts: [[1, "container", "mt-4"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Role Name", "name", "name", "required", "", "ngModel", "", 1, "form-control"], [1, "form-group", "form-check"], ["type", "checkbox", "name", "status", "ngModel", "", 1, "form-check-input"], [1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", "mr-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "container", "mt-5"], [1, "table-responsive"]],
        template: function RolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RolesComponent_Template_form_ngSubmit_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.onSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponent_Template_button_click_13_listener() {
              return ctx.onReset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reset ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-roles-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.editMode ? "Update" : "Add", " Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.editMode ? "Update" : "Add", " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_5__["RolesListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-roles',
            templateUrl: './roles.component.html',
            styleUrls: ['./roles.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, {
          rlForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "F42D":
    /*!******************************************************************!*\
      !*** ./src/app/recieps/recipes-start/recipes-start.component.ts ***!
      \******************************************************************/

    /*! exports provided: RecipesStartComponent */

    /***/
    function F42D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesStartComponent", function () {
        return RecipesStartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RecipesStartComponent = /*#__PURE__*/function () {
        function RecipesStartComponent() {
          _classCallCheck(this, RecipesStartComponent);
        }

        _createClass(RecipesStartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecipesStartComponent;
      }();

      RecipesStartComponent.ɵfac = function RecipesStartComponent_Factory(t) {
        return new (t || RecipesStartComponent)();
      };

      RecipesStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecipesStartComponent,
        selectors: [["app-recipes-start"]],
        decls: 2,
        vars: 0,
        template: function RecipesStartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select Recipe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2llcHMvcmVjaXBlcy1zdGFydC9yZWNpcGVzLXN0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesStartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recipes-start',
            templateUrl: './recipes-start.component.html',
            styleUrls: ['./recipes-start.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "JGvp":
    /*!*************************************************!*\
      !*** ./src/app/store/reducers/roles.reducer.ts ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function JGvp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return rolesReducer;
      });
      /* harmony import */


      var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/models */
      "VHTt");
      /* harmony import */


      var _actions_roles_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/roles.action */
      "uNui");

      var createdAt = new Date().toLocaleString();
      var initialState = {
        roles: [new src_app_models__WEBPACK_IMPORTED_MODULE_0__["RolesModel"]('Admin', true, createdAt)],
        editedRoles: null,
        editedRolesIndex: -1
      };

      function rolesReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions_roles_action__WEBPACK_IMPORTED_MODULE_1__["ADD_ROLES"]:
            return Object.assign(Object.assign({}, state), {
              roles: [].concat(_toConsumableArray(state.roles), [action.payload])
            });

          case _actions_roles_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ROLES"]:
            var roles = state.roles[state.editedRolesIndex];
            var updatedRoles = Object.assign(Object.assign({}, roles), action.payload);

            var updatedRolesArr = _toConsumableArray(state.roles);

            updatedRolesArr[state.editedRolesIndex] = updatedRoles;
            return Object.assign(Object.assign({}, state), {
              roles: updatedRolesArr,
              editedRoles: null,
              editedRolesIndex: -1
            });

          case _actions_roles_action__WEBPACK_IMPORTED_MODULE_1__["DELETE_ROLES"]:
            return Object.assign(Object.assign({}, state), {
              roles: state.roles.filter(function (v, i) {
                return i !== action.payload;
              }),
              editedRoles: null,
              editedRolesIndex: -1
            });

          case _actions_roles_action__WEBPACK_IMPORTED_MODULE_1__["START_EDIT"]:
            return Object.assign(Object.assign({}, state), {
              editedRolesIndex: action.payload,
              editedRoles: Object.assign({}, state.roles[action.payload])
            });

          case _actions_roles_action__WEBPACK_IMPORTED_MODULE_1__["STOP_EDIT"]:
            return Object.assign(Object.assign({}, state), {
              editedRoles: null,
              editedRolesIndex: -1
            });

          default:
            return state;
        }
      }
      /***/

    },

    /***/
    "LdjU":
    /*!**********************************************!*\
      !*** ./src/app/routes/app-routing.module.ts ***!
      \**********************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function LdjU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../to-do/to-do.component */
      "rviq");
      /* harmony import */


      var _recieps_recieps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../recieps/recieps.component */
      "tXJa");
      /* harmony import */


      var _recieps_recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../recieps/recipes-start/recipes-start.component */
      "F42D");
      /* harmony import */


      var _recieps_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../recieps/recipes-detail/recipes-detail.component */
      "mdiy");
      /* harmony import */


      var _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../roles/roles.component */
      "EB1e");

      var appRoutes = [{
        path: '',
        component: _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_2__["ToDoComponent"]
      }, {
        path: 'recipes',
        component: _recieps_recieps_component__WEBPACK_IMPORTED_MODULE_3__["ReciepsComponent"],
        children: [{
          path: '',
          component: _recieps_recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_4__["RecipesStartComponent"]
        }, {
          path: ':id',
          component: _recieps_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_5__["RecipesDetailComponent"]
        }]
      }, {
        path: 'roles',
        component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "S3+y":
    /*!**************************************!*\
      !*** ./src/app/store/app.reducer.ts ***!
      \**************************************/

    /*! exports provided: appReducer */

    /***/
    function S3Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appReducer", function () {
        return appReducer;
      });
      /* harmony import */


      var _store_reducers_roles_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../store/reducers/roles.reducer */
      "JGvp");

      var appReducer = {
        roleList: _store_reducers_roles_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
      };
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Angular Demo';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [[1, "container"], [1, "row"], [1, "col-md-12"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "VHTt":
    /*!*********************************!*\
      !*** ./src/app/models/index.ts ***!
      \*********************************/

    /*! exports provided: RecipeModel, RolesModel */

    /***/
    function VHTt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _recipe_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recipe.model */
      "lkCC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RecipeModel", function () {
        return _recipe_model__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _roles_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./roles.model */
      "gYOh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RolesModel", function () {
        return _roles_model__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /***/

    },

    /***/
    "XuPC":
    /*!**********************************************************!*\
      !*** ./src/app/roles/roles-list/roles-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: RolesListComponent */

    /***/
    function XuPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesListComponent", function () {
        return RolesListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _store_actions_roles_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../store/actions/roles.action */
      "uNui");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RolesListComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesListComponent_tr_14_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onEditRole(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesListComponent_tr_14_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onDeleteRole(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r1.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r1.createdAt);
        }
      }

      var RolesListComponent = /*#__PURE__*/function () {
        function RolesListComponent(store) {
          _classCallCheck(this, RolesListComponent);

          this.store = store;
        }

        _createClass(RolesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.roleList = this.store.select('roleList');
            this.roleList.subscribe(function (d) {
              return console.log('roles --->>> ', d.roles);
            });
          }
        }, {
          key: "onEditRole",
          value: function onEditRole(index) {
            this.store.dispatch(new _store_actions_roles_action__WEBPACK_IMPORTED_MODULE_1__["StartEdit"](index));
          }
        }, {
          key: "onDeleteRole",
          value: function onDeleteRole(index) {
            this.store.dispatch(new _store_actions_roles_action__WEBPACK_IMPORTED_MODULE_1__["DeleteRoles"](index));
          }
        }]);

        return RolesListComponent;
      }();

      RolesListComponent.ɵfac = function RolesListComponent_Factory(t) {
        return new (t || RolesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      RolesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RolesListComponent,
        selectors: [["app-roles-list"]],
        decls: 16,
        vars: 3,
        consts: [[1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
        template: function RolesListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created At");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RolesListComponent_tr_14_Template, 13, 3, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 1, ctx.roleList).roles);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3JvbGVzLWxpc3Qvcm9sZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-roles-list',
            templateUrl: './roles-list.component.html',
            styleUrls: ['./roles-list.component.css']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "agSv");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./to-do/to-do.component */
      "rviq");
      /* harmony import */


      var _recieps_recieps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./recieps/recieps.component */
      "tXJa");
      /* harmony import */


      var _recieps_recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./recieps/recipes-start/recipes-start.component */
      "F42D");
      /* harmony import */


      var _recieps_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./recieps/recipes-list/recipes-list.component */
      "4SaO");
      /* harmony import */


      var _recieps_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./recieps/recipes-detail/recipes-detail.component */
      "mdiy");
      /* harmony import */


      var _recieps_recipes_list_recipes_item_recipes_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./recieps/recipes-list/recipes-item/recipes-item.component */
      "+kaM");
      /* harmony import */


      var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./routes/app-routing.module */
      "LdjU");
      /* harmony import */


      var _roles_roles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./roles/roles.component */
      "EB1e");
      /* harmony import */


      var _roles_roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./roles/roles-list/roles-list.component */
      "XuPC");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services */
      "o0su");
      /* harmony import */


      var _store_app_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./store/app.reducer */
      "S3+y");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services__WEBPACK_IMPORTED_MODULE_17__["RecipeService"], _services__WEBPACK_IMPORTED_MODULE_17__["RolesService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_18__["appReducer"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
          maxAge: 25,
          logOnly: false,
          features: {
            pause: false,
            lock: true,
            persist: true
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_8__["ToDoComponent"], _recieps_recieps_component__WEBPACK_IMPORTED_MODULE_9__["ReciepsComponent"], _recieps_recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_10__["RecipesStartComponent"], _recieps_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_11__["RecipesListComponent"], _recieps_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_12__["RecipesDetailComponent"], _recieps_recipes_list_recipes_item_recipes_item_component__WEBPACK_IMPORTED_MODULE_13__["RecipesItemComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_15__["RolesComponent"], _roles_roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_16__["RolesListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_8__["ToDoComponent"], _recieps_recieps_component__WEBPACK_IMPORTED_MODULE_9__["ReciepsComponent"], _recieps_recipes_start_recipes_start_component__WEBPACK_IMPORTED_MODULE_10__["RecipesStartComponent"], _recieps_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_11__["RecipesListComponent"], _recieps_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_12__["RecipesDetailComponent"], _recieps_recipes_list_recipes_item_recipes_item_component__WEBPACK_IMPORTED_MODULE_13__["RecipesItemComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_15__["RolesComponent"], _roles_roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_16__["RolesListComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_18__["appReducer"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
              maxAge: 25,
              logOnly: false,
              features: {
                pause: false,
                lock: true,
                persist: true
              }
            })],
            providers: [_services__WEBPACK_IMPORTED_MODULE_17__["RecipeService"], _services__WEBPACK_IMPORTED_MODULE_17__["RolesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "gYOh":
    /*!***************************************!*\
      !*** ./src/app/models/roles.model.ts ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function gYOh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return RolesModel;
      });

      var RolesModel = function RolesModel(name, status, createdAt) {
        _classCallCheck(this, RolesModel);

        this.name = name;
        this.status = status;
        this.createdAt = createdAt;
      };
      /***/

    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 14,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "/swagger", 1, "navbar-brand"], ["src", "assets/img/swagger.png", "width", "35", "height", "35", "alt", "Swagger"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/recipes", 1, "nav-link"], ["routerLink", "/roles", 1, "nav-link"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "To-Do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recipes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Roles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kuH+":
    /*!********************************************!*\
      !*** ./src/app/services/recipe.Service.ts ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function kuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return RecipeService;
      });
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models */
      "VHTt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RecipeService = /*#__PURE__*/function () {
        function RecipeService() {
          _classCallCheck(this, RecipeService);

          this.recipes = [new _models__WEBPACK_IMPORTED_MODULE_0__["RecipeModel"]('Shrimp Recipes', 'These shrimp recipes are easy enough for a quick weeknight dinner, delish enough for date night', "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-taco-lime-shrimp-still006-1527253576.jpeg"), new _models__WEBPACK_IMPORTED_MODULE_0__["RecipeModel"]('Potato Recipes', 'Baked, fried, or mashed, there"s no wrong way to cook potatoes. Need more comfort food?', "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fried-mashed-potato-balls-horizontal-1533320721.jpg")];
        }

        _createClass(RecipeService, [{
          key: "getRecipes",
          value: function getRecipes() {
            return this.recipes.slice();
          }
        }, {
          key: "getRecipe",
          value: function getRecipe(index) {
            return this.recipes[index];
          }
        }]);

        return RecipeService;
      }();

      RecipeService.ɵfac = function RecipeService_Factory(t) {
        return new (t || RecipeService)();
      };

      RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RecipeService,
        factory: RecipeService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecipeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lkCC":
    /*!****************************************!*\
      !*** ./src/app/models/recipe.model.ts ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function lkCC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return RecipeModel;
      });

      var RecipeModel = function RecipeModel(name, desc, imagePath) {
        _classCallCheck(this, RecipeModel);

        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
      };
      /***/

    },

    /***/
    "mdiy":
    /*!********************************************************************!*\
      !*** ./src/app/recieps/recipes-detail/recipes-detail.component.ts ***!
      \********************************************************************/

    /*! exports provided: RecipesDetailComponent */

    /***/
    function mdiy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesDetailComponent", function () {
        return RecipesDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services */
      "o0su");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RecipesDetailComponent = /*#__PURE__*/function () {
        function RecipesDetailComponent(recipeService, route) {
          _classCallCheck(this, RecipesDetailComponent);

          this.recipeService = recipeService;
          this.route = route;
        }

        _createClass(RecipesDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.params.subscribe(function (params) {
              _this2.id = +params['id'];
              _this2.recipe = _this2.recipeService.getRecipe(_this2.id);
            });
          }
        }]);

        return RecipesDetailComponent;
      }();

      RecipesDetailComponent.ɵfac = function RecipesDetailComponent_Factory(t) {
        return new (t || RecipesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      RecipesDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecipesDetailComponent,
        selectors: [["app-recipes-detail"]],
        decls: 7,
        vars: 4,
        consts: [[1, "card", "mb-3"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"]],
        template: function RecipesDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2llcHMvcmVjaXBlcy1kZXRhaWwvcmVjaXBlcy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recipes-detail',
            templateUrl: './recipes-detail.component.html',
            styleUrls: ['./recipes-detail.component.css']
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "o0su":
    /*!***********************************!*\
      !*** ./src/app/services/index.ts ***!
      \***********************************/

    /*! exports provided: RecipeService, RolesService */

    /***/
    function o0su(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _recipe_Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recipe.Service */
      "kuH+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RecipeService", function () {
        return _recipe_Service__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _roles_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./roles.Service */
      "/6hp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RolesService", function () {
        return _roles_Service__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /***/

    },

    /***/
    "rviq":
    /*!******************************************!*\
      !*** ./src/app/to-do/to-do.component.ts ***!
      \******************************************/

    /*! exports provided: ToDoComponent */

    /***/
    function rviq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoComponent", function () {
        return ToDoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToDoComponent = /*#__PURE__*/function () {
        function ToDoComponent() {
          _classCallCheck(this, ToDoComponent);
        }

        _createClass(ToDoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToDoComponent;
      }();

      ToDoComponent.ɵfac = function ToDoComponent_Factory(t) {
        return new (t || ToDoComponent)();
      };

      ToDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToDoComponent,
        selectors: [["app-to-do"]],
        decls: 54,
        vars: 0,
        consts: [[1, "container", "my-4"], [1, "font-weight-bold"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "check1", "checked", "", 1, "custom-control-input"], ["for", "check1", 1, "custom-control-label"], ["type", "checkbox", "id", "check2", "checked", "", 1, "custom-control-input"], ["for", "check2", 1, "custom-control-label"], ["type", "checkbox", "id", "check8", "checked", "", 1, "custom-control-input"], ["for", "check8", 1, "custom-control-label"], ["type", "checkbox", "id", "check3", "checked", "", 1, "custom-control-input"], ["for", "check3", 1, "custom-control-label"], ["type", "checkbox", "id", "check4", 1, "custom-control-input"], ["for", "check4", 1, "custom-control-label"], ["type", "checkbox", "id", "check5", "checked", "", 1, "custom-control-input"], ["for", "check5", 1, "custom-control-label"], ["type", "checkbox", "id", "check6", 1, "custom-control-input"], ["for", "check6", 1, "custom-control-label"], ["type", "checkbox", "id", "check7", 1, "custom-control-input"], ["for", "check7", 1, "custom-control-label"], ["type", "checkbox", "id", "check9", "checked", "", 1, "custom-control-input"], ["for", "check9", 1, "custom-control-label"], ["type", "checkbox", "id", "check10", "checked", "", 1, "custom-control-input"], ["for", "check10", 1, "custom-control-label"]],
        template: function ToDoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To-Do List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Added Routes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Added Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Added Http");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Added NgRx and Store-devtools");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dapper to access SQL Database using Repository Patter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Use three layer architecture in API");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Log the Input and Output from API in Serilog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Enable Elmah for enception handling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Added Swagger and JWT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Added Migration, DB Connection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvLWRvL3RvLWRvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-to-do',
            templateUrl: './to-do.component.html',
            styleUrls: ['./to-do.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "tXJa":
    /*!**********************************************!*\
      !*** ./src/app/recieps/recieps.component.ts ***!
      \**********************************************/

    /*! exports provided: ReciepsComponent */

    /***/
    function tXJa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReciepsComponent", function () {
        return ReciepsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./recipes-list/recipes-list.component */
      "4SaO");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ReciepsComponent = /*#__PURE__*/function () {
        function ReciepsComponent() {
          _classCallCheck(this, ReciepsComponent);
        }

        _createClass(ReciepsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReciepsComponent;
      }();

      ReciepsComponent.ɵfac = function ReciepsComponent_Factory(t) {
        return new (t || ReciepsComponent)();
      };

      ReciepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReciepsComponent,
        selectors: [["app-recieps"]],
        decls: 5,
        vars: 0,
        consts: [[1, "row", "mt-3"], [1, "col-md-5"], [1, "col-md-7"]],
        template: function ReciepsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-recipes-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_1__["RecipesListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2llcHMvcmVjaWVwcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReciepsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recieps',
            templateUrl: './recieps.component.html',
            styleUrls: ['./recieps.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "uNui":
    /*!***********************************************!*\
      !*** ./src/app/store/actions/roles.action.ts ***!
      \***********************************************/

    /*! exports provided: ADD_ROLES, UPDATE_ROLES, DELETE_ROLES, START_EDIT, STOP_EDIT, AddRoles, UpdatedRoles, DeleteRoles, StartEdit, StopEdit */

    /***/
    function uNui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ADD_ROLES", function () {
        return ADD_ROLES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UPDATE_ROLES", function () {
        return UPDATE_ROLES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE_ROLES", function () {
        return DELETE_ROLES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "START_EDIT", function () {
        return START_EDIT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function () {
        return STOP_EDIT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRoles", function () {
        return AddRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatedRoles", function () {
        return UpdatedRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteRoles", function () {
        return DeleteRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartEdit", function () {
        return StartEdit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopEdit", function () {
        return StopEdit;
      });

      var ADD_ROLES = 'ADD_ROLES';
      var UPDATE_ROLES = 'UPDATE_ROLES';
      var DELETE_ROLES = 'DELETE_ROLES';
      var START_EDIT = 'START_EDIT';
      var STOP_EDIT = 'STOP_EDIT';

      var AddRoles = function AddRoles(payload) {
        _classCallCheck(this, AddRoles);

        this.payload = payload;
        this.type = ADD_ROLES;
      };

      var UpdatedRoles = function UpdatedRoles(payload) {
        _classCallCheck(this, UpdatedRoles);

        this.payload = payload;
        this.type = UPDATE_ROLES;
      };

      var DeleteRoles = function DeleteRoles(payload) {
        _classCallCheck(this, DeleteRoles);

        this.payload = payload;
        this.type = DELETE_ROLES;
      };

      var StartEdit = function StartEdit(payload) {
        _classCallCheck(this, StartEdit);

        this.payload = payload;
        this.type = START_EDIT;
      };

      var StopEdit = function StopEdit() {
        _classCallCheck(this, StopEdit);

        this.type = STOP_EDIT;
      };
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map