# Todo-App DropBox Sync Example

[Live Example](https://todo-app-dropbox-sync.cloud.dropstack.run/todos)

## API

```bash
curl https://todo-app-dropbox-sync.cloud.dropstack.run/todos
```

```bash
curl https://todo-app-dropbox-sync.cloud.dropstack.run/todos/dda2e2e0-c3eb-11e7-b483-ff13837f8bd4
```

```bash
curl -X POST \
  https://todo-app-dropbox-sync.cloud.dropstack.run/todos \
  -H 'content-type: application/json' \
  -d '{"text": "Hello World", "isCompleted": true}'
```

```bash
curl -X PUT \
  https://todo-app-dropbox-sync.cloud.dropstack.run/todos/dda2e2e0-c3eb-11e7-b483-ff13837f8bd4 \
  -H 'content-type: application/json' \
  -d '{"isCompleted": true}'
```


```bash
curl -X DELETE https://todo-app-dropbox-sync.cloud.dropstack.run/todos/dda2e2e0-c3eb-11e7-b483-ff13837f8bd4
```