import React from "react";
import { Box } from "../UI";
import { lista } from "../../info"

const List = () => {
    return <Box>
        {/* Se abren y cierran llaves para poder trabajar con JS/JSC dentro de un componente */}
        {
            lista.cargos.map(({id, type, value, from, date}) => {
                return <div key={id}>
                    <span>{type}</span>
                    <span>{value}</span>
                </div>
            })
        }
    </Box>
}

export default List