// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  var phetString = 'PhET Interactive Simulations'; // as in Java sims, do not internationalize
  var copyrightString = 'Copyright © 2004-2014 University of Colorado Boulder'; // as in Java sims, do not internationalize

  var softwareAgreementAndLicensingString = require( 'string!JOIST/softwareAgreementAndLicensing' );

  // constants
  var SOFTWARE_LICENSING_URL = 'http://phet.colorado.edu/licensing';

  return {
    name: phetString,
    copyright: copyrightString,
    links: [
      {text: softwareAgreementAndLicensingString, url: SOFTWARE_LICENSING_URL}
    ]};
} );
