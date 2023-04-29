import { Route, Routes } from 'react-router-dom'
import { IRoute, routePublic } from '@/router/routes/routePublic'
import AuthHOC from '@/router/routerComponents/AuthHOC'
import { routeDashboard } from '@/router/routes/routeDashboard'
import { CssBaseline } from '@mui/material'
import * as React from 'react'
import { ThemeSettingProvider } from '@/theme/theme'
import { routePokemonPage } from '@/router/routes/routePokemonPage'

export const MainRouter = () => {
    const allRoutes: IRoute[] = [...routePublic, ...routeDashboard, ...routePokemonPage]

    return (
        <ThemeSettingProvider>
            <CssBaseline />
            <Routes>
                {allRoutes.map((route: IRoute) => {
                    const ReturnComponent = AuthHOC(route.element, route.auth)
                    return <Route path={route.path} element={<ReturnComponent />} key={route.path} />
                })}
            </Routes>
        </ThemeSettingProvider>
    )
}
