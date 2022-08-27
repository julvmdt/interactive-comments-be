export default {
    type: "object",
    properties: {
      id: { type: 'string' },
      avatar: { type: 'string' },
      user: { type: 'string' },
      createdAt: { type: 'string' },
      vote: { type: 'array', items: { type: "string"} },
      comment: { type: 'string' },
      replies: { type: 'array', items: { type: "string"} },
    },
    required: ['id', "user", "createdAt", "comment"]
  } as const;
  