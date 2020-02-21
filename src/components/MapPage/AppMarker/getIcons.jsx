import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
const dancingHallIcon = require('../../../assets/images/icons/dancinghall.png');
const bagsIcon = require('../../../assets/images/marker/bags.png');
const judoIcon = require('../../../assets/images/icons/judo.png');
const communitycentreIcon = require('../../../assets/images/icons/communitycentre.png');
const musicRockIcon = require('../../../assets/images/icons/music_rock.png');
const amphitheaterIcon = require('../../../assets/images/icons/amphitheater.png');
const lockerrentalIcon = require('../../../assets/images/icons/lockerrental.png');
const jeepIcon = require('../../../assets/images/icons/jeep.png');
const carIcon = require('../../../assets/images/icons/car.png');
const trupIcon = require('../../../assets/images/marker/trup.png');
const barIcon = require('../../../assets/images/icons/bar.png');
const fireworksIcon = require('../../../assets/images/icons/fireworks.png');
const strikeIcon = require('../../../assets/images/icons/strike.png');
const landfillIcon = require('../../../assets/images/icons/landfill.png');
const customsIcon = require('../../../assets/images/icons/customs.png');
const drugstoreIcon = require('../../../assets/images/icons/drugstore.png');
const casinoIcon = require('../../../assets/images/icons/casino-2.png');
const fireIcon = require('../../../assets/images/marker/fire.png');
const restaurantGreekIcon = require('../../../assets/images/icons/restaurant_greek.png');
const blastIcon = require('../../../assets/images/icons/blast.png');
const notBlastIcon = require('../../../assets/images/icons/amphitheater-2.png');


const icons = {};

export function getNewIcon(iconTypes){
    let iconUrl, className;

    switch (iconTypes){
        case 'civil_position':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'person_event_dancinghall':
            iconUrl = dancingHallIcon;
            className = 'marker dancinghall';
            break;
        case 'person_event_judo':
            iconUrl = judoIcon;
            className = 'marker judo';
            break;
        case 'eobags':
            iconUrl = bagsIcon;
            className = 'marker bags';
            break;
        case 'person_event_communitycentre':
            iconUrl = communitycentreIcon;
            className = 'marker communitycentre';
            break;
        case 'person_event_music_rock':
            iconUrl = musicRockIcon;
            className = 'marker music_rock';
            break;
        case 'person_event_amphitheater':
            iconUrl = amphitheaterIcon;
            className = 'marker amphitheater';
            break;
        case 'person_event_lockerrental':
            iconUrl = lockerrentalIcon;
            className = 'marker lockerrental';
            break;
        case 'person_event_jeep':
            iconUrl = jeepIcon;
            className = 'marker jeep';
            break;
        case 'person_event_avto':
            iconUrl = carIcon;
            className = 'marker avto';
            break;
        case 'eotrup':
            iconUrl = trupIcon;
            className = 'marker trup';
            break;
        case 'person_event_bar':
            iconUrl = barIcon;
            className = 'marker bar';
            break;
        case 'person_event_fireworks':
            iconUrl = fireworksIcon;
            className = 'marker fireworks';
            break;
        case 'person_event_strike':
            iconUrl = strikeIcon;
            className = 'marker strike';
            break;
        case 'person_event_landfill':
            iconUrl = landfillIcon;
            className = 'marker landfill';
            break;
        case 'person_event_customs':
            iconUrl = customsIcon;
            className = 'marker customs';
            break;
        case 'person_event_drugstore':
            iconUrl = drugstoreIcon;
            className = 'marker drugstore';
            break;
        case 'person_event_restaurant_greek':
            iconUrl = restaurantGreekIcon;
            className = 'marker civil_position';
            break;
        case 'person_event_casino':
            iconUrl = casinoIcon;
            className = 'marker casino';
            break;
        case 'eofire':
            iconUrl = fireIcon;
            className = 'marker fire';
            break;
        case 'eocrimescene':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eoskull':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eotrup_new':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eogun':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eoshooting':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eocontract':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eophones':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eophones_new':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eorevolt':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eorazboy':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eobank':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eoprison':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eoexchange':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eowrestling':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eoatm':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eorape':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eokill':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eoblast':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eonark':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'eoauto':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'hooligan':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'carfire':
            iconUrl = markerIcon;
            className = 'marker civil_position';
            break;
        case 'blast':
            iconUrl = blastIcon;
            className = 'marker blast';
            break;
        case 'notblast':
            iconUrl = notBlastIcon;
            className = 'marker notblast';
            break;
        default:
            iconUrl = markerIcon;
            className = 'marker civil_position';
    }

    icons[iconTypes] = new L.Icon({
        iconUrl: iconUrl,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        //iconSize: [32, 37],
        iconAnchor: [16, 0],
        popupAnchor: [0, 0],
        className: className
    });

    return icons[iconTypes];
}

export function getIcons(event_type_id) {
    switch (event_type_id) {
        case 999:
            return icons.civil_position||getNewIcon('civil_position');
        case 0:
            return icons.person_event_dancinghall||getNewIcon('person_event_dancinghall');
        case 1:
            return icons.person_event_judo||getNewIcon('person_event_judo');
        case 2:
            return icons.eobags||getNewIcon('eobags');
        case 3:
            return icons.person_event_communitycentre||getNewIcon('person_event_communitycentre');
        case 4:
            return icons.person_event_music_rock||getNewIcon('person_event_music_rock');
        case 5:
            return icons.person_event_amphitheater||getNewIcon('person_event_amphitheater');
        case 6:
            return icons.person_event_lockerrental||getNewIcon('person_event_lockerrental');
        case 7:
            return icons.person_event_jeep||getNewIcon('person_event_jeep');
        case 8:
            return icons.person_event_avto||getNewIcon('person_event_avto');
        case 9:
            return icons.eotrup||getNewIcon('eotrup');
        case 10:
            return icons.person_event_bar||getNewIcon('person_event_bar');
        case 11:
            return icons.person_event_fireworks||getNewIcon('person_event_fireworks');
        case 12:
            return icons.person_event_strike||getNewIcon('person_event_strike');
        case 13:
            return icons.person_event_landfill||getNewIcon('person_event_landfill');
        case 14:
            return icons.person_event_customs||getNewIcon('person_event_customs');
        case 15:
            return icons.person_event_drugstore||getNewIcon('person_event_drugstore');
        case 16:
            return icons.person_event_restaurant_greek||getNewIcon('person_event_restaurant_greek');
        case 18:
            return icons.person_event_casino||getNewIcon('person_event_casino');
        case 109:
            return icons.eofire||getNewIcon('eofire');
        case 121:
            return icons.eocrimescene||getNewIcon('eocrimescene');
        case 123:
            return icons.eoskull||getNewIcon('eoskull');
        case 133:
            return icons.eotrup||getNewIcon('eotrup');
        case 135:
            return icons.eotrup_new||getNewIcon('eotrup_new');
        case 139:
            return icons.eogun||getNewIcon('eogun');
        case 127:
            return icons.eoshooting||getNewIcon('eoshooting');
        case 141:
            return icons.eocontract||getNewIcon('eocontract');
        case 151:
            return icons.eophones||getNewIcon('eophones');
        case 153:
            return icons.eophones_new||getNewIcon('eophones_new');
        case 512:
            return icons.eobags||getNewIcon('eobags');
        case 513:
            return icons.eorevolt||getNewIcon('eorevolt');
        case 514:
            return icons.eorazboy||getNewIcon('eorazboy');
        case 515:
            return icons.eobank||getNewIcon('eobank');
        case 516:
            return icons.eoprison||getNewIcon('eoprison');
        case 517:
            return icons.eoexchange||getNewIcon('eoexchange');
        case 518:
            return icons.eowrestling||getNewIcon('eowrestling');
        case 520:
            return icons.eoatm||getNewIcon('eoatm');
        case 508:
            return icons.eorape||getNewIcon('eorape');
        case 502:
            return icons.eokill||getNewIcon('eokill');
        case 529:
            return icons.eoblast||getNewIcon('eoblast');
        case 547:
        case 548:
        case 549:
        case 550:
        case 552:
            return icons.eonark||getNewIcon('eonark');
        case 536:
        case 537:
            return icons.eoauto||getNewIcon('eoauto');
        case 539:
            return icons.hooligan||getNewIcon('hooligan');
        case 570:
            return icons.carfire||getNewIcon('carfire');
        case 1000:
            return icons.blast||getNewIcon('blast');
        case 1111:
            return icons.notblast||getNewIcon('notblast');
        default:
            return icons.information_icon||getNewIcon('information_icon');

    }
}