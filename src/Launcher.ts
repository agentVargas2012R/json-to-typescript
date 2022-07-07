import fs from 'fs';
import path from 'path';

const JsonToTs = require('json-to-ts');

class Launcher {

    public static start() {
        Launcher.prompt();
    }

    static async prompt() {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        await readLine.question('Enter json file that is inside the input directory:\n', async (name: any) => {
            readLine.close();
            Launcher.run(name);
        })
    }

    static async run(input: string) {
        const content = await fs.readFile(path.join(__dirname, `../input/${input}`), 'utf8', function(err, data) {
            if(err) {
                console.log(err);
            }

            const result = JsonToTs(JSON.parse(data));
            delete result[0]
            result.forEach((typeInterface: any) => {
                console.log(`Generating TS Model For: ${input}`);
                const limit = input.indexOf(".");
                fs.writeFile(path.join(__dirname, `../dist/${input.substring(0, limit)}.ts`), `export ${typeInterface}`, function(err: any) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("write file succeeded");
                    }
                });
            });

        });
    }
}

Launcher.start();
