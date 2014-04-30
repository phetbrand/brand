// Copyright 2002-2014, University of Colorado Boulder

// Returns branding information for the simulations, see https://github.com/phetsims/brand/issues/1
define( function( require ) {
  'use strict';

  var phetString = 'PhET Interactive Simulations'; // as in Java sims, do not internationalize
  var copyrightString = 'Copyright © 2004-2014 University of Colorado Boulder'; // as in Java sims, do not internationalize

  var softwareAgreementString = require( 'string!JOIST/softwareAgreement' );
  var softwareLicensingString = require( 'string!JOIST/softwareLicensing' );

  // constants
  var SOFTWARE_AGREEMENT_URL = 'http://phet.colorado.edu/about/software-agreement_v7.htm';
  var SOFTWARE_LICENSING_URL = 'http://phet.colorado.edu/licensing';

  return {
    name: phetString,
    copyright: copyrightString,
    links: [
      {text: softwareAgreementString, url: SOFTWARE_AGREEMENT_URL},
      {text: softwareLicensingString, url: SOFTWARE_LICENSING_URL}
    ]};
} );
