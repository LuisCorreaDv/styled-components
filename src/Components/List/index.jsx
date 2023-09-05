import React from "react";
import { Box, Btn } from "../UI";
import { lista } from "../../info"
import Card from "../Card";

const List = () => {
    return <Box>
        {/* Se abren y cierran llaves para poder trabajar con JS/JSC dentro de un componente */}
        {
            lista.cargos.map((cargo, i) => {
                return <Card key={i} cargo={cargo}/>
            })
        }
        <Btn>Ver mas</Btn>
    </Box>
}

export default List