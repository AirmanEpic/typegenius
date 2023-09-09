#!/usr/bin/env ts-node

import { Project, StructureKind } from "ts-morph";

const project = new Project();
project.addSourceFileAtPath("src/**/*.ts");

const sourceFile = project.getSourceFileOrThrow("typegenius.schema.ts");
const typeAlias = sourceFile.getTypeAliasOrThrow("exportedSchema");

console.log(typeAlias.getText());