import { CoreMenu } from '@core/types'
import { Role } from '../auth/models/role';

export const menu: CoreMenu[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    // translate: 'MENU.HOME',
    // role: [Role.SuperMonedas],
    type: 'item',
    icon: 'home',
    url: 'personas/inicio',

  },
  {
    id: 'corp',
    title: 'Corp',
    // role: [Role.SuperMonedas],
    // translate: 'MENU.PAGES.SECTION',
    type: 'collapsible',
    icon: 'coffee',
    children: [
      {
        id: 'misEmpleados',
        title: 'Mis empleados',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'users',
        children: [
          {
            id: 'nominaEmpleados',
            title: 'Nómina de empleados',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'solicitarCreditos',
            title: 'Solicitar créditos para mis empleados',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'confirmarAutorizacion',
            title: 'Confirmar autorización de débito del ROLL',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'aprobacionSolicitud',
            title: 'Aprobación de solicitud de créditos',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'registroCreditos',
            title: 'Registro de créditos',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
        ]
      },
      {
        id: 'lineasCredito',
        title: 'Líneas de crédito',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'misLineasCredito',
            title: 'Mis líneas de crédito',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'appLineaProv',
            title: 'Aplicar línea de crédito para pago Proveedores',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'appLineaNom',
            title: 'Aplicar línea de crédito para pago de nómina',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'consultaLineas',
            title: 'Consultas de líneas de crédito',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
        ]
      },
      {
        id: 'suoerMonedas',
        title: 'Super monedas',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'dollar-sign',
        children: [
          {
            id: 'cargarSuperMonedas',
            title: 'Cargar super monedas a empleados',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          }
        ]
      },
      {
        id: 'descuentosROLL',
        title: 'Descuentos de ROLL',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'folder-minus',
        children: [
          {
            id: 'descontarEmpleados',
            title: 'Descontar a empleados',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          }
        ]
      },
      {
        id: 'comisiones',
        title: 'Comisiones',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'plus-square',
        children: [
          {
            id: 'misComisiones',
            title: 'Mis comisiones',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          }
        ]
      },
    ]
  },
  {
    id: 'superMonedas',
    title: 'Super Monedas',
    // role: [Role.SuperMonedas],
    // translate: 'MENU.PAGES.SECTION',
    type: 'collapsible',
    icon: 'dollar-sign',
    children: [
      {
        id: 'obtenerCobroConSuperMonedas',
        title: '**Cobrar con Super Monedas',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'users',
        url: '/supermonedas/inicio'
      },
      {
        id: 'cobrarConSuperMonedas',
        title: 'Cobrar con Super Monedas',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'users',
        url: '/supermonedas/cobrar'
      },
      {
        id: 'reporteCobrosConSupermonedas',
        title: 'Reporte de Cobros con Supermonedas',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'users',
        url: '/supermonedas/reporteCobros'
      },
      {
        id: 'clientes',
        title: 'Clientes',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'users',
        url: 'personas/supermonedas/mis-monedas'
      },
      {
        id: 'productos',
        title: 'Productos',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'shopping-bag',
        url: 'personas/supermonedas/mis-monedas'
      },
      {
        id: 'cargarMonedas',
        title: 'Cargar Monedas',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'dollar-sign',
        url: 'personas/supermonedas/mis-monedas'
      },
      {
        id: 'cargarPremios',
        title: 'Cargar Premios',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'package',
        url: 'personas/supermonedas/mis-monedas'
      }, {
        id: 'mdoMotorOfertas',
        title: 'MDO Motor de Ofertas',
        // translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'file-text',
        children: [
          {
            id: 'parametrizacion',
            title: 'Parametrización',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'prediccionesCrosseling',
            title: 'Predicciones para crosseling',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'prediccionesRefil',
            title: 'Predicciones para refil',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'prediccionesNuevosProductos',
            title: 'Predicciones para nuevos productos',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          },
          {
            id: 'generarOfertaCliente',
            title: 'Generar oferta para cliente',
            // translate: 'MENU.APPS.EMAIL',
            type: 'item',
            icon: 'circle',
            url: 'personas/supermonedas/mis-monedas'
          }]
      }
    ]
  },
  {
    id: 'comercial',
    title: 'Comercial',
    // translate: 'MENU.PAGES.SECTION',
    type: 'collapsible',
    icon: 'shopping-bag',
    children: [
      {
        id: 'notasPedido',
        title: 'Notas de pedido',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'dollar-sign',
        url: 'comercial/notas-pedido'
      },
      {
        id: 'solicitudesCredito',
        title: 'Solicitudes de crédito',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'dollar-sign',
        url: '/comercial/solicitudes-de-credito'
      },
      {
        id: 'creditosPreAprobados',
        title: 'Créditos pre aprobados',
        // translate: 'MENU.APPS.EMAIL',
        type: 'item',
        icon: 'credit-card',
        url: 'personas/supermonedas/mis-monedas'
      },
    ]
  },
  {
    id: 'cobrosRecurrentes',
    title: 'Cobros Recurrentes',
    // translate: 'MENU.HOME',
    // role: [Role.SuperMonedas],
    type: 'item',
    icon: 'dollar-sign',
    url: 'personas/supermonedas/mis-monedas',

  },
  {
    id: 'recaudaciones',
    title: 'Recaudaciones',
    // translate: 'MENU.HOME',
    // role: [Role.SuperMonedas],
    type: 'item',
    icon: 'dollar-sign',
    url: 'personas/supermonedas/mis-monedas',
  },
  {
    id: 'creditosPreapobados',
    title: 'Creditos PreAprobados',
    // translate: 'MENU.HOME',
    // role: [Role.SuperMonedas],
    type: 'item',
    icon: 'credit-card',
    url: 'creditos/creditosPreAprobados',
  }
]
