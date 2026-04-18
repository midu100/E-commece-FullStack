"use client";
import React, { useState } from 'react';

const DataTable = ({ columns, data, actions, selectable = false, onSelectionChange }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = data.map((_, i) => i);
      setSelectedRows(allIds);
      if(onSelectionChange) onSelectionChange(allIds);
    } else {
      setSelectedRows([]);
      if(onSelectionChange) onSelectionChange([]);
    }
  };

  const handleSelectRow = (i) => {
    let updated;
    if (selectedRows.includes(i)) {
      updated = selectedRows.filter(id => id !== i);
    } else {
      updated = [...selectedRows, i];
    }
    setSelectedRows(updated);
    if(onSelectionChange) onSelectionChange(updated);
  };

  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-xl border border-slate-700/50 bg-[#1e293b]">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#0f172a] text-slate-400 uppercase text-[11px] font-bold tracking-widest border-b border-slate-700/50">
          <tr>
            {selectable && (
              <th className="py-5 px-6 w-12 text-center">
                <input 
                  type="checkbox" 
                  className="rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500/50 w-4 h-4 cursor-pointer"
                  onChange={handleSelectAll}
                  checked={data.length > 0 && selectedRows.length === data.length}
                />
              </th>
            )}
            {columns.map((col, index) => (
              <th key={index} className="py-5 px-6">
                {col.label}
              </th>
            ))}
            {actions && <th className="py-5 px-6 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/50 text-sm">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`hover:bg-[#334155]/20 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all ${selectedRows.includes(rowIndex) ? 'bg-blue-500/5 border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}`}>
              {selectable && (
                <td className="py-5 px-6 text-center">
                  <input 
                    type="checkbox" 
                    className="rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500/50 w-4 h-4 cursor-pointer"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={() => handleSelectRow(rowIndex)}
                  />
                </td>
              )}
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="py-5 px-6 text-slate-300 font-medium whitespace-nowrap">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
              {actions && (
                <td className="py-5 px-6 text-right">
                  {actions(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="text-center py-12 text-slate-500 font-semibold flex flex-col items-center justify-center gap-2">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 border-dashed mb-2">🔍</div>
          No records found.
        </div>
      )}
    </div>
  );
};

export default DataTable;
