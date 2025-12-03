import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";
import { factory } from 'typescript'

const DATE = factory.createTypeReferenceNode(factory.createIdentifier("Date"))
const NULL = factory.createLiteralTypeNode(factory.createNull());

async function generateTypes() {
  const ast = await openapiTS(
    new URL(
      "./swagger.json",
      import.meta.url,
    ),
    {
      transform(schemaObject, metadata) {
        if (schemaObject.format === "date-time") {
          return schemaObject.nullable
            ? factory.createUnionTypeNode([DATE, NULL])
            : DATE;
        }
      },
      propertiesRequiredByDefault: true, // デフォルトで、全てのプロパティを必須として扱う
      rootTypes: true, // ルートレベルの型定義を生成する
      rootTypesNoSchemaPrefix: true, // スキーマ名に"Schema" prefixを付けない
    },
  );

  const contents = astToString(ast);

  fs.writeFileSync("./src/openapi-typescript/types/api.d.ts", contents);
}

generateTypes();