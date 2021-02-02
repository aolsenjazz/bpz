# bpz (Boston Parking Zones)

Repository for the [BostonParkingZones](https://bostonparkingzones.com) website. Boston Parking Zones is a free service which provides a map of parking zones in Boston, with their associated IDs for use with parking apps such as [Passport Parking](https://www.passportparking.com/).

## Run Locally

Before trying to run locally, make sure that you have [PM2](https://pm2.keymetrics.io/) installed globally.

```shell
git clone https://github.com/aolsenjazz/bpz
cd bpz
npm i
mv EXAMPLE.ecosystem.config.js ecosystem.config.js
```

Update the `ecosystem.config.js` file with your own [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key). *Finally, run*

```shell
npm run start
```