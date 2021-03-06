import circular from '../__fixtures__/circular';

/*

https://www.electricmonk.nl/log/2008/08/07/dependency-resolving-algorithm/

def dep_resolve(node, resolved, unresolved):
   unresolved.append(node)
   for edge in node.edges:
      if edge not in resolved:
         if edge in unresolved:
            raise Exception('Circular reference detected: %s -> %s' % (node.name, edge.name))
         dep_resolve(edge, resolved, unresolved)
   resolved.append(node)
   unresolved.remove(node)
*/
export default (tree) => {
  tree.tables.push({
    name: 'EVERYTHING_INCLUDED',
    foreignKeyConstraints: tree.tables.map((t) => ({
      refTable: {
        name: t.name
      }
    }))
  });

  const depResolve = (table, resolved, unresolved, circular) => {
    const name = table.name;
    const node = tree.tables.find((t) => t.name === table.name);
    if (!node) throw new Error('missing: ' + table.name);
    unresolved.push(node.name);
    table.foreignKeyConstraints.forEach(({ refTable }) => {
      if (!resolved.includes(refTable.name)) {
        if (unresolved.includes(refTable.name)) {
          circular.push(refTable.name);
          //   throw new Error(
          //     `Circular reference detected: ${table.name}, ${refTable.name}`
          //   );
        } else {
          const next = tree.tables.find((t) => t.name === refTable.name);
          depResolve(next, resolved, unresolved, circular);
        }
      }
    });
    resolved.push(table.name);
    unresolved = unresolved.filter((name) => name != table.name);
  };

  return tree.tables.reduce((m, table) => {
    var resolved = [];
    var unresolved = [];
    var circular = [];
    depResolve(table, resolved, unresolved, circular);
    m[table.name] = { resolved, unresolved, circular };
    return m;
  }, {});
};
