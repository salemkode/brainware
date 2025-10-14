import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Return the last 100 tasks in a given task list.
export const getNames = query({
  handler: async (ctx) => {
     return await ctx.db
          .query("names").collect();
  },
});

export const setName = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("names", {
      body: args.name
    });
  },
});

export const isEnabled = query({
    handler: async (ctx) => {
        return !!(await ctx.db.query("isEnabled").first())
    }
})