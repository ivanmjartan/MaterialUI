import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import Page from "../components/Page";

function getRandomizer(bottom, top) {
    return function () {
        return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
    }
}

const random5 = getRandomizer(0, 4)
const random255 = getRandomizer(0, 255)

const borderStyle: Array<string> = [];
borderStyle[0] = "dotted";
borderStyle[1] = "dashed";
borderStyle[2] = "solid";
borderStyle[3] = "double";
borderStyle[4] = "dotted dashed solid double";


const borderWidth: Array<string> = [];
borderWidth[0] = "1px";
borderWidth[1] = "2px";
borderWidth[2] = "3px";
borderWidth[3] = "4px";
borderWidth[4] = "5px";

function randomColor() {
    return `rgba(${random255()}, ${random255()}, ${random255()}, 1)`
}

const Performance: React.FC = () => {

    const [numOfComp, setNumOfCompo] = useState(10);
    const [generate, setGenerate] = useState(false);
    const [styled, setStyled] = useState(true);

    const updateInputValue = (evt) => {
        const val = evt.target.value;
        setNumOfCompo(Number(val));
        setGenerate(false);
    };

    const onClick = () => {
        setGenerate(true);
    };

    const onCheck = () => {
        setStyled((prev) => !prev);
    }

    const randomComponents = useMemo(() => {
        const result: Array<JSX.Element> = [];

        if (generate) {
            for (let i = 0; i < numOfComp; i++) {
                if (styled) {
                    result.push(
                        <Box
                            key={`id-${i}`}
                            sx={{
                                padding: 2,
                                margin: 2,
                                borderStyle: borderStyle[random5()],
                                borderWidth: borderWidth[random5()],
                                borderColor: randomColor()
                            }}>
                            aaa
                        </Box>
                    );
                }else{
                    result.push(<div  key={`id-${i}`}>aaaa</div>)
                }
            }
        }

        return result;
    }, [numOfComp, generate, styled]);

    return <Page>
        <Typography variant="h5" gutterBottom>
            Generate random styled components
        </Typography>
        <Box sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingBottom: 2,
        }}>
            <TextField
                label="Number of components"
                defaultValue={10}
                sx={{
                    marginRight: 3
                }}
                onChange={evt => updateInputValue(evt)}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={styled}
                        onChange={onCheck}
                        name="antoine"
                    />
                }
                label="Styled"
            />
            <Button variant="contained" color="secondary" onClick={onClick}>
                Generate
            </Button>
        </Box>

        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: 2,
        }}>
            {randomComponents}
        </Box>
    </Page>;
};

export default Performance;