import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';

/**
 *This interface is required to implement object with configurations
 */
interface IConfigObject {
  protocol?: string;
  host: string;
  port?: string;
}

/**
 * This method loads "config.[env].json"
 *
 * @param {AppConfig} config
 * @return {Function}
 */
export const loadConfig = (config: AppConfig) => () => config.load();

@Injectable()
export class AppConfig {
  private _config: IConfigObject;
  private _env: object = environment;

  constructor(private _httpClient: HttpClient) {
  }

  /**
   * This getter returns server host
   * @return {string}
   */
  get host(): string {
    const {protocol = 'http://', host, port = '80'} = this._config;
    return `${protocol}${host}:${port}`;
  }

  /**
   * Use to get the data found in the second file (config file)
   */
  getConfig(key: string): string {
    return this._config[key];
  }

  /**
   * Use to get the data found in the first file (env file)
   * @return {string}
   */
  getEnv(key: string): string {
    return this._env[key];
  }

  /**
   * This method loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   * @return {void}
   */
  load(): void {
    let config: Observable<Object>;

    switch (this.getEnv('env')) {
      case 'production':
        config = this._httpClient.get('assets/config/config.config.production.json');

        break;

      case 'development':
        config = this._httpClient.get('assets/config/config.development.json');

        break;

      case 'default':
        console.error('Environment file is not set or invalid');
    }

    if (config) {
      config.subscribe((config: IConfigObject) => this._config = config);
    }
  }
}
