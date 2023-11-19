import { Suspense } from "react";
import { NavBar } from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { AppBar, Container } from "@mui/material";

export const Layout = () => {
    return (
        <>
            <AppBar position="static">
                <NavBar />
                <Container maxWidth="xl">
                    <Suspense fallback={<Loader />} >
                        <Outlet />
                    </Suspense>
                </Container>
            </AppBar>
        </>
    );
};