function revealSantaRoute(routes: string[][]): string[] {
    if (routes.length === 0) return [];

    const routeMap: Record<string, string> = {};
    for (const [from, to] of routes) {
        routeMap[from] = to;
    }


    const result = [];
    let city = routes[0][0];
    while (city && routeMap[city]) {
        result.push(city);
        city = routeMap[city];
    }

    if (city) result.push(city);

    return result;
}




revealSantaRoute([
    ['MEX', 'CAN'],
    ['UK', 'GER'],
    ['CAN', 'UK']
])
// → ['MEX', 'CAN', 'UK', 'GER']