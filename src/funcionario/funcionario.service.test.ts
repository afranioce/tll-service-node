import * as funcionario_service from "./funcionario.service"

import * as criar_funcionario_dto from "./criar-funcionario.dto"
import * as atualizar_funcionario_dto from "./atualizar-funcionario.dto"
// @ponicode
describe("findAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new funcionario_service.FuncionarioService(undefined, undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.findAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("encontrarMovimentacoes", () => {
    let inst: any

    beforeEach(() => {
        inst = new funcionario_service.FuncionarioService(undefined, undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.encontrarMovimentacoes(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.encontrarMovimentacoes(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.encontrarMovimentacoes("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.encontrarMovimentacoes(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.encontrarMovimentacoes(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.encontrarMovimentacoes(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("findOne", () => {
    let inst: any

    beforeEach(() => {
        inst = new funcionario_service.FuncionarioService(undefined, undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.findOne(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.findOne(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.findOne(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.findOne(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.findOne("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.findOne(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new funcionario_service.FuncionarioService(undefined, undefined)
    })

    test("0", () => {
        let param1: any = new criar_funcionario_dto.CriarfuncionarioDto()
        let callFunction: any = () => {
            inst.create(param1)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("update", () => {
    let inst: any

    beforeEach(() => {
        inst = new funcionario_service.FuncionarioService(undefined, undefined)
    })

    test("0", () => {
        let param2: any = new atualizar_funcionario_dto.AtualizarFuncionarioDto()
        let callFunction: any = () => {
            inst.update(12345, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2: any = new atualizar_funcionario_dto.AtualizarFuncionarioDto()
        let callFunction: any = () => {
            inst.update(987650, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2: any = new atualizar_funcionario_dto.AtualizarFuncionarioDto()
        let callFunction: any = () => {
            inst.update(56784, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2: any = new atualizar_funcionario_dto.AtualizarFuncionarioDto()
        let callFunction: any = () => {
            inst.update("bc23a9d531064583ace8f67dad60f6bb", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2: any = new atualizar_funcionario_dto.AtualizarFuncionarioDto()
        let callFunction: any = () => {
            inst.update(12, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let param2: any = new atualizar_funcionario_dto.AtualizarFuncionarioDto()
        let callFunction: any = () => {
            inst.update(NaN, param2)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("delete", () => {
    let inst: any

    beforeEach(() => {
        inst = new funcionario_service.FuncionarioService(undefined, undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.delete(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.delete(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.delete(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.delete(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.delete("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.delete(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
