import { Request, Response, NextFunction, express } from "./deps.ts";

const app = express();
const port = Number(Deno.env.get("HTTP_PORT")) || 5090; // TODO BG fix env
const demoData = JSON.parse(Deno.readTextFileSync('./demo.json'));

const reqLogger = function (req: Request, _res: Response, next: NextFunction) {
    console.info(`${req.method} request to "${req.url}" by ${req.hostname}`);
    next();
};

app.use(reqLogger);

app.get("/", (_req, res) => {
    res.status(200).send("Hello from Deno and Express!");
});

app.get("/users", (_req, res) => {
    res.status(200).json(demoData.users);
});

app.get("/users/:id", (req, res) => {
    const idx = Number(req.params.id);
    for (const user of demoData.users) {
        if (user.id === idx) {
            res.status(200).json(user);
        }
    }
    res.status(400).json({ msg: "User not found" });
});

app.listen(port, () => {
    console.log(`Listening on ${port} ...`);
});
