<!-- @format -->

# Form Render development progress

- [ ] render core pure function(progressing 70%)
  - [x] render node type identify
  - [x] core main recursion method
    - [x] proxy parameter
    - [ ] resolve nested
  - [x] method: get real path
  - [x] method: get value by path
  - [ ] method: set value by path
  - [ ] method: generate initial result set
  - [ ] method: Trigger custom logic by data that be marked the path
- [ ] render core component(no started)
  - [ ] get node components
  - [ ] get sub-group components
- [ ] custom component register center(no started)
- [ ] example base components package (no started)
  - [ ] text input
  - [ ] number input
  - [ ] date picker
  - [ ] color picker
  - [ ] radio & radio group
  - [ ] select
  - [ ] text area
  - [ ] Collapse-object
  - [ ] Dynamic form item
  - [ ] control decorator
  - [ ] un-control decorator
- [ ] example component progress (no started)

# Folder description

```shell
├── src
│   ├── component            					# common component & default form ui
│   │   ├── common										# common component
│   │   │   ├── Fieldset.tsx					# Proxy multi-item value
│   │   │   └── Field.tsx							# Proxy form item value
│   │   └── ui											  # default ui
│   │       ├── Default.tsx
│   │       └── TextInput.tsx
│   ├── core
│   │   ├── componentRegister.ts			# custom ui component register center
│   │   └── index.tsx								  # form generate
│   ├── dictionary									  # form dictionary
│   │   └── index.ts
│   ├── example											  # usage show
│   │   └── index.ts
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   ├── setupTests.ts
│   ├── __test											  # test case
│   │   └── dictionary.ts
│   └── @types
│       ├── baseComponent.d.ts				# global type define
│       ├── core.ts
│       └── lib.d.ts
```
