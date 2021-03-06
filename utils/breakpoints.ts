/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemedStyledProps } from 'styled-components'

export const mobile = (props: ThemedStyledProps<any, any>) =>
  props.theme.breakpoints.mobile

export const tablet = (props: ThemedStyledProps<any, any>) =>
  props.theme.breakpoints.tablet

export const desktop = (props: ThemedStyledProps<any, any>) =>
  props.theme.breakpoints.desktop

export const landscape = (props: ThemedStyledProps<any, any>) =>
  props.theme.breakpoints.landscape
