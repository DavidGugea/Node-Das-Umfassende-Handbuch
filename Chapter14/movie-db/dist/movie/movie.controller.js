"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
let MovieController = class MovieController {
    constructor() {
        this.data = [
            { id: 1, title: 'Iron Man', year: 2008 },
            { id: 2, title: 'Thor', year: 2011 },
            { id: 3, title: 'Captain America', year: 2011 },
        ];
    }
    getAllMovies() {
        return this.data;
    }
    getOneMovie(id) {
        return this.data.find(movie => movie.id === parseInt(id, 10));
    }
    updateMovie(id, movie) {
        const index = this.data.findIndex(movie => movie.id === parseInt(id, 10));
        this.data[index] = movie;
        return movie;
    }
    removeMovie(id) {
        this.data = this.data.filter(movie => movie.id !== parseInt(id, 10));
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getAllMovies", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "getOneMovie", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "updateMovie", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(224),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "removeMovie", null);
MovieController = __decorate([
    (0, common_1.Controller)('movie')
], MovieController);
exports.MovieController = MovieController;
//# sourceMappingURL=movie.controller.js.map