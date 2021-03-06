define({ "api": [
  {
    "type": "post",
    "url": "/api/messages/",
    "title": "POST",
    "group": "CREATE_MESSAGE",
    "description": "<p>Create new message</p>",
    "version": "1.0.0",
    "name": "Test_task",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Author email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message text.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Input error message.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>False.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>False</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Created.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Message id.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/messages.js",
    "groupTitle": "CREATE_MESSAGE"
  },
  {
    "type": "get",
    "url": "/api/messages/list/:page",
    "title": "GET",
    "group": "GET_ARRAY_OF_MESSAGES",
    "description": "<p>Return an Array of Message objects</p>",
    "version": "1.0.0",
    "name": "Test_task",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>Page of message (&gt;= 0)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Input error message.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>False.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>False</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Array of Message objects.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/messages.js",
    "groupTitle": "GET_ARRAY_OF_MESSAGES"
  },
  {
    "type": "get",
    "url": "/api/messages/single/:id",
    "title": "GET",
    "group": "GET_MESSAGE",
    "description": "<p>Return Message object by Id</p>",
    "version": "1.0.0",
    "name": "Test_task",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Message Id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Input error message.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "Success",
            "description": "<p>False.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>False</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Message object.</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/messages.js",
    "groupTitle": "GET_MESSAGE"
  }
] });
