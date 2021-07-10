"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PesoDia = void 0;
var typeorm_1 = require("typeorm");
var Gado_1 = require("./Gado");
var PesoDia = /** @class */ (function () {
    function PesoDia() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "idPesoDia" })
    ], PesoDia.prototype, "idPesoDia", void 0);
    __decorate([
        typeorm_1.Column("int", { name: "idGado" })
    ], PesoDia.prototype, "idGado", void 0);
    __decorate([
        typeorm_1.Column("timestamp", { name: "dia" })
    ], PesoDia.prototype, "dia", void 0);
    __decorate([
        typeorm_1.Column("float", { name: "ganhoPeso", precision: 12 })
    ], PesoDia.prototype, "ganhoPeso", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gado_1.Gado; }, function (gado) { return gado.pesoDias; }, {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION",
        }),
        typeorm_1.JoinColumn([{ name: "idGado", referencedColumnName: "idGado" }])
    ], PesoDia.prototype, "idGado2", void 0);
    PesoDia = __decorate([
        typeorm_1.Index("fk_TB_pesoDia_TB_gado1_idx", ["idGado"], {}),
        typeorm_1.Index("idPesoDia_UNIQUE", ["idPesoDia"], { unique: true }),
        typeorm_1.Entity("PesoDia", { schema: "TCC" })
    ], PesoDia);
    return PesoDia;
}());
exports.PesoDia = PesoDia;
