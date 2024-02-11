// src/templates/basic/index.js
import { createClient } from "@libsql/client/web";
import renderHtml from "./renderHtml.js";
var basic_default = {
  async fetch(request, env) {
    const client = createClient({ url: env.TURSO_URL, authToken: env.TURSO_AUTH_TOKEN });
    const { rows } = await client.execute(`
      SELECT count(*) AS num_tables FROM sqlite_master
      WHERE type ='table' AND name NOT IN ('libsql_wasm_func_table','_litestream_seq','_litestream_lock')
    `);
    const html = await renderHtml(rows[0].num_tables);
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
};
export {
  basic_default as default
};
