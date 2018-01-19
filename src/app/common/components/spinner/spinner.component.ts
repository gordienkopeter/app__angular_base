import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  exportAs: 'AppSpinnerComponent'
})
/**
 * Spinner component use as loader. Adaptive by parent element.
 */
export class SpinnerComponent implements OnInit {
  /**
   * Theme color palette for the spinner.
   * This input property set spinner color.
   * @type {string}
   */
  @Input()
  public color: string = 'primary';

  /**
   * The spinner supports two modes, "determinate" and "indeterminate".
   * The default mode is "determinate". In this mode, the progress is set via the value property,
   * which can be a whole number between 0 and 100.
   * In "indeterminate" mode, the value property is ignored.
   * @type {string}
   */
  @Input()
  public mode: string = 'indeterminate';

  /**
   * This input property set spinner visible flag for rendering on DOM.
   * @type {boolean}
   */
  @Input()
  public visible: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
