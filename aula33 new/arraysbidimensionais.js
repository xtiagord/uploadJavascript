const arr = [
    "1º Nível",
    ["2º Nível", 42, true],
    [
        ["3º Nível", "1º Item", "Olá, mundo!"],
        ["3º Nível", "2º Item", "Oi mundo!"],
    ],
    []
    ]

    console.log(arr)


    const matriz = [
        ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
        ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
        ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
    ]

    //console.table(matriz)
    //matriz.push(["Nova linha"])
    //matriz[0].push("Nova coluna")

    for (let a = 0; a < matriz.length; a++){
        for(let b = 0; b < matriz[a].length; b++){
            const elemento = matriz[a][b]
            console.log("Posição: (" + a  + ","+ b + ") Valor:" + elemento)
        }

    }