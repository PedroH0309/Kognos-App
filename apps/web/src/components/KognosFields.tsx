'use client';

import {useEffect, useId, useRef, useState, type KeyboardEvent} from 'react';
import {CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, X} from 'lucide-react';
import {parseBrazilianDate, formatBrazilianDate} from '@/lib/onboarding-helpers';

export interface KognosOption<T extends string> {value:T; label:string; description?:string}

export function KognosSelect<T extends string>({
  label,
  value,
  options,
  onChange,
  hint,
  disabled=false,
  compact=false,
  className=''
}: {
  label?:string;
  value:T;
  options:readonly KognosOption<T>[];
  onChange:(value:T)=>void;
  hint?:string;
  disabled?:boolean;
  compact?:boolean;
  className?:string;
}) {
  const id=useId();
  const container=useRef<HTMLDivElement>(null);
  const trigger=useRef<HTMLButtonElement>(null);
  const [open,setOpen]=useState(false);
  const selectedIndex=Math.max(0,options.findIndex(option=>option.value===value));
  const [active,setActive]=useState(selectedIndex);
  const [above,setAbove]=useState(false);
  useEffect(()=>{
    if(!open)return;
    function onOutside(event:PointerEvent){if(container.current&&!container.current.contains(event.target as Node))setOpen(false);}
    function onEscape(event:globalThis.KeyboardEvent){if(event.key==='Escape'){setOpen(false);trigger.current?.focus();}}
    document.addEventListener('pointerdown',onOutside);
    document.addEventListener('keydown',onEscape);
    return()=>{document.removeEventListener('pointerdown',onOutside);document.removeEventListener('keydown',onEscape);};
  },[open]);
  useEffect(()=>{
    if(open){const list=container.current?.querySelector('.kg-select-options');const option=list?.querySelector(`[id$="-opt-${active}"]`);option?.scrollIntoView({block:'nearest'});}
  },[open,active]);
  const selected=options[selectedIndex];
  function openList(index=selectedIndex){
    setActive(index);
    const rect=trigger.current?.getBoundingClientRect();
    setAbove(Boolean(rect&&rect.bottom+315>window.innerHeight&&rect.top>315));
    setOpen(true);
  }
  function choose(index:number){if(!options[index])return;onChange(options[index].value);setActive(index);setOpen(false);trigger.current?.focus();}
  function onKeyDown(event:KeyboardEvent<HTMLButtonElement>){
    if(disabled)return;
    if(event.key==='Tab'){setOpen(false);return;}
    if(event.key==='Escape'){if(open){event.preventDefault();setOpen(false);}return;}
    if(event.key==='ArrowDown'||event.key==='ArrowUp'||event.key==='Home'||event.key==='End'){
      event.preventDefault();
      const next=event.key==='Home'?0:event.key==='End'?options.length-1:event.key==='ArrowDown'?Math.min(options.length-1,(open?active:selectedIndex)+1):Math.max(0,(open?active:selectedIndex)-1);
      setActive(next);if(!open)openList(next);return;
    }
    if(event.key==='Enter'||event.key===' '){event.preventDefault();if(open)choose(active);else openList();}
  }
  return <div className={`kg-form-field kg-select ${compact?'compact':''} ${className}`.trim()} ref={container}>
    {label&&<span className="kg-field-title" id={`${id}-label`}>{label}</span>}
    <button ref={trigger} type="button" className={`kg-select-trigger ${open?'is-open':''}`} role="combobox" aria-labelledby={label?`${id}-label`:undefined} aria-label={label||selected?.label||'Selecione uma opção'} aria-haspopup="listbox" aria-expanded={open} aria-controls={`${id}-options`} aria-activedescendant={open?`${id}-opt-${active}`:undefined} disabled={disabled} onKeyDown={onKeyDown} onClick={()=>{if(open)setOpen(false);else openList();}}>
      <span className="kg-select-value">{selected?.label||'Selecione uma opção'}</span><ChevronDown className="kg-chevron" size={18} aria-hidden="true"/>
    </button>
    {hint&&<small className="kg-field-hint">{hint}</small>}
    {open&&<div id={`${id}-options`} className={`kg-select-options ${above?'is-above':''}`} role="listbox" aria-labelledby={label?`${id}-label`:undefined}>
      {options.map((opt,index)=><button id={`${id}-opt-${index}`} key={opt.value} type="button" role="option" aria-selected={opt.value===value} tabIndex={-1} className={`kg-select-option ${index===active?'is-active':''}`} onMouseEnter={()=>setActive(index)} onClick={()=>choose(index)}><span><strong>{opt.label}</strong>{opt.description&&<small>{opt.description}</small>}</span>{opt.value===value&&<Check size={16} aria-hidden="true"/>}</button>)}
    </div>}
  </div>;
}

const monthFormatter=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'});
const readableFormatter=new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'long',year:'numeric'});
const weekDays=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const toISO=(year:number,month:number,day:number)=>`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
const fromISO=(value:string)=>{const date=value?new Date(`${value}T12:00:00`):new Date();return Number.isFinite(date.getTime())?date:new Date();};

export function KognosDateField({label,value,onChange,hint,className=''}:{label?:string;value:string;onChange:(value:string)=>void;hint?:string;className?:string}){
 const id=useId();const container=useRef<HTMLDivElement>(null);const trigger=useRef<HTMLButtonElement>(null);
 const [opened,setOpened]=useState(false);
 const [draft,setDraft]=useState(formatBrazilianDate(value));
 const [invalid,setInvalid]=useState(false);
 const [above,setAbove]=useState(false);
 const [month,setMonth]=useState(()=>{const d=fromISO(value);return new Date(d.getFullYear(),d.getMonth(),1);});
 useEffect(()=>setDraft(formatBrazilianDate(value)),[value]);
 useEffect(()=>{if(!opened)return;const outside=(event:PointerEvent)=>{if(container.current&&!container.current.contains(event.target as Node))setOpened(false);};const esc=(event:globalThis.KeyboardEvent)=>{if(event.key==='Escape'){setOpened(false);trigger.current?.focus();}};document.addEventListener('pointerdown',outside);document.addEventListener('keydown',esc);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',esc);};},[opened]);
 function commit(){if(!draft.trim()){onChange('');setInvalid(false);return;}const iso=parseBrazilianDate(draft);if(iso){onChange(iso);setInvalid(false);}else{setInvalid(true);}}
 const year=month.getFullYear(),m=month.getMonth(),offset=new Date(year,m,1).getDay(),daysInMonth=new Date(year,m+1,0).getDate();
 const days=Array.from({length:Math.ceil((offset+daysInMonth)/7)*7},(_,i)=>i-offset+1);
 function select(day:number){if(day<1||day>daysInMonth)return;const iso=toISO(year,m,day);onChange(iso);setDraft(formatBrazilianDate(iso));setOpened(false);setInvalid(false);trigger.current?.focus();}
 function moveMonth(delta:number){setMonth(v=>new Date(v.getFullYear(),v.getMonth()+delta,1));}
 function selectToday(date:Date){const iso=toISO(date.getFullYear(),date.getMonth(),date.getDate());onChange(iso);setDraft(formatBrazilianDate(iso));setInvalid(false);setOpened(false);}
 return <div className={`kg-form-field kg-date-field ${className}`.trim()} ref={container}>
  {label&&<label htmlFor={`${id}-input`} className="kg-field-title">{label}</label>}
  <div className={`kg-date-box ${invalid?'has-error':''} ${opened?'is-open':''}`}>
   <input id={`${id}-input`} type="text" inputMode="numeric" autoComplete="off" placeholder="dd/mm/aaaa" maxLength={10} value={draft} onChange={e=>{setDraft(e.target.value);setInvalid(false);}} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();commit();}}} onBlur={commit} aria-invalid={invalid} aria-describedby={invalid?`${id}-error`:undefined}/>
   {draft&&<button type="button" className="kg-date-icon-button" aria-label="Remover data" onClick={()=>{setDraft('');setInvalid(false);onChange('');}}><X size={15}/></button>}
   <button ref={trigger} type="button" className="kg-date-icon-button calendar" aria-label="Escolher data no calendário" aria-expanded={opened} aria-controls={`${id}-calendar`} onClick={()=>{if(!opened){const d=fromISO(value);setMonth(new Date(d.getFullYear(),d.getMonth(),1));const rect=trigger.current?.getBoundingClientRect();setAbove(Boolean(rect&&rect.bottom+340>window.innerHeight&&rect.top>340));}setOpened(v=>!v);}}><CalendarDays size={19}/></button>
  </div>
  {invalid?<small className="kg-field-error" id={`${id}-error`} role="alert">Data inválida. Use o formato dd/mm/aaaa.</small>:hint&&<small className="kg-field-hint">{hint}</small>}
  {opened&&<div className={`kg-calendar ${above?'is-above':''}`} id={`${id}-calendar`} role="group" aria-label="Calendário de seleção de data">
   <div className="kg-calendar-head"><button type="button" onClick={()=>moveMonth(-1)} aria-label="Mês anterior"><ChevronLeft size={18}/></button><strong aria-live="polite">{monthFormatter.format(month)}</strong><button type="button" onClick={()=>moveMonth(1)} aria-label="Próximo mês"><ChevronRight size={18}/></button></div>
   <div className="kg-calendar-grid">{weekDays.map(d=><span key={d} className="kg-calendar-weekday">{d}</span>)}{days.map((d,i)=>d<1||d>daysInMonth?<span key={`blank-${i}`} aria-hidden="true"/>:<button key={i} type="button" aria-label={readableFormatter.format(new Date(year,m,d))} aria-pressed={value===toISO(year,m,d)} className={`${value===toISO(year,m,d)?'is-selected':''} ${toISO(year,m,d)===toISO(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())?'is-today':''}`} onClick={()=>select(d)}>{d}</button>)}</div>
   <div className="kg-calendar-footer"><button type="button" onClick={()=>{const d=new Date();setMonth(new Date(d.getFullYear(),d.getMonth(),1));selectToday(d);}}>Hoje</button><span>Selecione a data</span></div>
  </div>}
 </div>;
}