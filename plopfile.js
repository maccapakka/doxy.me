export default function (plop) {
  // Component generator for design-system
  plop.setGenerator("component", {
    description: "Generate a new component in @doxy/design-system",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
        validate: function (value) {
          if (/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return true;
          }
          return "Component name must be in PascalCase (e.g., ExampleButton, UserCard)";
        },
      },
      {
        type: "input",
        name: "description",
        message: "Brief description of the component:",
        default: "A component",
      },
    ],
    actions: [
      // Create component folder with all files
      {
        type: "add",
        path: "packages/design-system/src/components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/component/index.ts.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/src/components/{{pascalCase name}}/{{pascalCase name}}.unit.tsx",
        templateFile: "plop-templates/component/Component.unit.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/component/Component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/design-system/src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/component/Component.module.css.hbs",
      },
      // Update barrel file to export the new component
      {
        type: "append",
        path: "packages/design-system/src/components/index.ts",
        template: 'export * from "./{{pascalCase name}}";\n',
      },
    ],
  });
}

