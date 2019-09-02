export default class Punto {
    constructor() {
        this._posX = 0;
        this._posY = 0;

    }

    //LECTURA Y PARAMETROS
    get posX() {
        return this._posX;
    }
    get posY() {
        return this._posY;
    }

    set posX(x) {
        if(x > -100 || x < 100) {
            this._posX = x;
        }
        else {
            this._posX = 0;
        }
    }

    set posY(y) {
        if(y > -100 || y < 100) {
            this._posY = y;
        }
        else {
            this._posY = 0;
        }
    }

    //OBTENER DISTANCIA Y METODO toSTRING
    _distanciaPuntos(x1, x2, y1, y2) {
        let distancia = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
        return distancia;
    }
    _toString() {
        let localizacionString = '('+ this._posX + ',' + this._posY +')';
        return localizacionString;
    }
}